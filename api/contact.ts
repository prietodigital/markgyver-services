// Vercel serverless function: receives the contact form and sends it via Resend.
// Required env vars: RESEND_API_KEY, CONTACT_TO_EMAIL. Optional: CONTACT_FROM_EMAIL.

const escape = (s: string) =>
  s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  // Honeypot: bots fill the hidden field; pretend success.
  if (typeof data.website === "string" && data.website.trim()) return json({ ok: true });

  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const name = str(data.name, 100);
  const phone = str(data.phone, 40);
  const email = str(data.email, 200);
  const message = str(data.message, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Missing or invalid fields" }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return json({ error: "Server not configured" }, 500);

  const html = `
    <h2>New message from the MarkGyver website</h2>
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Phone:</strong> ${escape(phone || "-")}</p>
    <p><strong>Email:</strong> ${escape(email)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${escape(message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "MarkGyver Site <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `New contact: ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return json({ error: "Failed to send" }, 502);
  }
  return json({ ok: true });
}
