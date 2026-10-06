import { useState, useEffect, createContext, useContext } from "react";
import logo from "@/imports/4195.png";

/* ── Narrow hook ──────────────────────────────────────────────────── */
function useNarrow(bp = 720) {
  const [narrow, setNarrow] = useState(() => window.innerWidth < bp);
  useEffect(() => {
    const handler = () => setNarrow(window.innerWidth < bp);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [bp]);
  return narrow;
}

/* ── Palette ──────────────────────────────────────────────────────── */
const sky       = "#4aaee0";
const skyDeep   = "#1e5c8a";
const skyPale   = "#eaf5fc";
const pink      = "#e8407a";
const pinkPale  = "#fde8f0";
const orange    = "#f07a3a";
const orangePale = "#fef2ea";
const ink       = "#1a3a5c";
const muted     = "#4a6a8a";
const border    = "#d6e8f5";

/* ── Translations ─────────────────────────────────────────────────── */
type Lang = "en" | "el" | "it";

const T = {
  en: {
    nav: { about: "About", services: "Services", contact: "Contact" },
    hero: {
      location: "Lefkada Island, Greece",
      headline1: "Every job done",
      headline2: "right.",
      sub: "From leaky taps to lush lawns — MarkGyver brings dependable craftsmanship to every corner of Lefkada and the surrounding area.",
      cta1: "See Our Services",
      cta2: "Get in Touch",
    },
    about: {
      tag: "About Us",
      headline1: "Your island's",
      headline2: "trusted hands.",
      p1: "MarkGyver is a locally owned handyman and lawn care service built on one promise: show up, do great work, and leave things better than we found them. We serve all of Lefkada and the surrounding island communities.",
      p2: "Whether it's a tricky plumbing fix, a fresh coat of paint, or keeping your garden immaculate through every Greek season — we handle it all with the same care and attention to detail.",
    },
    services: {
      tag: "What We Do",
      headline1: "Services across",
      headline2: "every trade.",
    },
    serviceNames: {
      "Home Repairs": "Home Repairs",
      "Painting": "Painting",
      "Plumbing": "Plumbing",
      "Electrical": "Electrical",
      "Carpentry": "Carpentry",
      "Maintenance": "Maintenance",
      "Assembly & Installations": "Assembly & Installations",
      "Lawn & Outdoor Care": "Lawn & Outdoor Care",
    },
    serviceItems: {
      "General Repairs": "General Repairs", "Drywall Repair": "Drywall Repair", "Caulking & Sealing": "Caulking & Sealing", "Odd Jobs": "Odd Jobs",
      "Interior Painting": "Interior Painting", "Exterior Painting": "Exterior Painting", "Deck & Fence Staining": "Deck & Fence Staining",
      "Leak Repairs": "Leak Repairs", "Toilet Fixes": "Toilet Fixes", "Fixture Installation": "Fixture Installation",
      "Switches & Outlets": "Switches & Outlets", "Light Fixtures": "Light Fixtures", "Ceiling Fans": "Ceiling Fans", "Smart Home Setup": "Smart Home Setup",
      "Trim & Molding": "Trim & Molding", "Shelving": "Shelving", "Door & Window Repair": "Door & Window Repair", "Deck & Fence Repair": "Deck & Fence Repair",
      "Gutter Cleaning": "Gutter Cleaning", "Pressure Washing": "Pressure Washing", "Weatherproofing": "Weatherproofing", "Minor Roof Repairs": "Minor Roof Repairs",
      "Furniture Assembly": "Furniture Assembly", "TV Mounting": "TV Mounting", "Appliance Installation": "Appliance Installation",
      "Lawn Mowing": "Lawn Mowing", "Weed Removal": "Weed Removal", "Hedge Trimming": "Hedge Trimming", "Leaf Cleanup": "Leaf Cleanup",
      "Mulching": "Mulching", "Garden Bed Maintenance": "Garden Bed Maintenance", "Tree Limb Cutting": "Tree Limb Cutting", "Outdoor Cleanup": "Outdoor Cleanup",
    },
    whyUs: {
      tag: "Why Choose Us",
      headline1: "Built on trust,",
      headline2: "delivered with care.",
      points: [
        { icon: "🏝️", label: "Island Coverage",   desc: "We service all of Lefkada and the surrounding area — no job too remote." },
        { icon: "🤝", label: "Reliable & Honest",  desc: "Clear quotes, no hidden fees, and work done when we say it will be." },
        { icon: "🔨", label: "All Trades",          desc: "One call covers repairs, painting, plumbing, electrical, and lawn care." },
        { icon: "📞", label: "Easy to Reach",       desc: "Call or message us directly — fast response, friendly service." },
      ],
      bgs: [skyPale, pinkPale, orangePale, skyPale],
    },
    contact: {
      tag: "Contact",
      headline1: "Let's get your",
      headline2: "project started.",
      blurb: "Ready to fix that leaky tap, freshen up the exterior, or finally tame the garden? Give us a call or send a message — we're happy to give a free estimate.",
      bizLabel: "Handyman & Lawn Care",
      locationLabel: "Location", locationValue: "Lefkada Island, Greece", locationSub: "Serving the whole island & surrounding area",
      phoneLabel: "Phone",
      hoursLabel: "Hours", hoursValue: "Mon – Sat · 8:00 – 19:00", hoursSub: "Emergency calls welcome",
      callNow: "📞 Call Now",
      formTitle: "Send us a message",
      fields: { name: "Your name", phone: "Phone number", email: "Email address", message: "How can we help?", messagePh: "Describe what needs fixing, painting, or maintaining…" },
      sendBtn: "Send Message →",
      sendingBtn: "Sending…",
      errorMsg: "Something went wrong. Please try again or call us.",
      successTitle: "Message sent!",
      successSub: "We'll get back to you shortly.",
      sendAnother: "Send another",
    },
    footer: { rights: "All rights reserved." },
  },

  el: {
    nav: { about: "Σχετικά", services: "Υπηρεσίες", contact: "Επικοινωνία" },
    hero: {
      location: "Νησί Λευκάδα, Ελλάδα",
      headline1: "Κάθε δουλειά",
      headline2: "σωστά.",
      sub: "Από στραγγαλισμένες βρύσες έως φροντισμένους κήπους — ο MarkGyver φέρνει αξιόπιστη τεχνογνωσία σε κάθε γωνιά της Λευκάδας.",
      cta1: "Δείτε τις Υπηρεσίες μας",
      cta2: "Επικοινωνήστε μαζί μας",
    },
    about: {
      tag: "Σχετικά με εμάς",
      headline1: "Τα αξιόπιστα χέρια",
      headline2: "του νησιού σας.",
      p1: "Ο MarkGyver είναι μια τοπική υπηρεσία επισκευών και περιποίησης κήπου με μία υπόσχεση: να εμφανιζόμαστε, να κάνουμε εξαιρετική δουλειά και να αφήνουμε τα πράγματα καλύτερα απ' ό,τι τα βρήκαμε.",
      p2: "Είτε πρόκειται για επισκευή υδραυλικού, φρέσκο χρώμα ή αλάνθαστη συντήρηση κήπου — τα χειριζόμαστε όλα με την ίδια προσοχή και επιμέλεια.",
    },
    services: {
      tag: "Τι Κάνουμε",
      headline1: "Υπηρεσίες σε",
      headline2: "κάθε τομέα.",
    },
    serviceNames: {
      "Home Repairs": "Επισκευές Σπιτιού",
      "Painting": "Βαφή",
      "Plumbing": "Υδραυλικά",
      "Electrical": "Ηλεκτρολογικά",
      "Carpentry": "Ξυλουργικά",
      "Maintenance": "Συντήρηση",
      "Assembly & Installations": "Συναρμολόγηση & Εγκαταστάσεις",
      "Lawn & Outdoor Care": "Φροντίδα Κήπου & Εξωτερικού Χώρου",
    },
    serviceItems: {
      "General Repairs": "Γενικές Επισκευές", "Drywall Repair": "Επισκευή Γυψοσανίδας", "Caulking & Sealing": "Στεγανοποίηση", "Odd Jobs": "Διάφορες Εργασίες",
      "Interior Painting": "Εσωτερική Βαφή", "Exterior Painting": "Εξωτερική Βαφή", "Deck & Fence Staining": "Βαφή Τέρας & Φράχτη",
      "Leak Repairs": "Επισκευή Διαρροών", "Toilet Fixes": "Επισκευή Τουαλέτας", "Fixture Installation": "Εγκατάσταση Εξαρτημάτων",
      "Switches & Outlets": "Διακόπτες & Πρίζες", "Light Fixtures": "Φωτιστικά", "Ceiling Fans": "Ανεμιστήρες Οροφής", "Smart Home Setup": "Εγκατάσταση Smart Home",
      "Trim & Molding": "Ξυλεία & Κορνίζες", "Shelving": "Ράφια", "Door & Window Repair": "Επισκευή Πόρτας & Παραθύρου", "Deck & Fence Repair": "Επισκευή Τέρας & Φράχτη",
      "Gutter Cleaning": "Καθαρισμός Υδρορροών", "Pressure Washing": "Πλύσιμο Υψηλής Πίεσης", "Weatherproofing": "Μόνωση", "Minor Roof Repairs": "Μικροεπισκευές Στέγης",
      "Furniture Assembly": "Συναρμολόγηση Επίπλων", "TV Mounting": "Ανάρτηση Τηλεόρασης", "Appliance Installation": "Εγκατάσταση Συσκευών",
      "Lawn Mowing": "Κούρεμα Γκαζόν", "Weed Removal": "Αφαίρεση Ζιζανίων", "Hedge Trimming": "Κλάδεμα Φράχτη", "Leaf Cleanup": "Καθαρισμός Φύλλων",
      "Mulching": "Χλωριώδες Έδαφος", "Garden Bed Maintenance": "Συντήρηση Παρτεριών", "Tree Limb Cutting": "Κλάδεμα Δέντρων", "Outdoor Cleanup": "Καθαρισμός Εξωτερικού Χώρου",
    },
    whyUs: {
      tag: "Γιατί να μας επιλέξετε",
      headline1: "Χτισμένοι στην εμπιστοσύνη,",
      headline2: "παραδοτέοι με φροντίδα.",
      points: [
        { icon: "🏝️", label: "Κάλυψη Νησιού",       desc: "Εξυπηρετούμε ολόκληρη τη Λευκάδα και την περιβάλλουσα περιοχή — καμία δουλειά δεν είναι πολύ μακριά." },
        { icon: "🤝", label: "Αξιόπιστοι & Τίμιοι", desc: "Σαφείς προσφορές, χωρίς κρυφές χρεώσεις και εργασία που ολοκληρώνεται στην ώρα της." },
        { icon: "🔨", label: "Όλες οι Ειδικότητες",  desc: "Ένα τηλέφωνο καλύπτει επισκευές, βαφή, υδραυλικά, ηλεκτρολογικά και φροντίδα κήπου." },
        { icon: "📞", label: "Εύκολη Επικοινωνία",   desc: "Καλέστε μας απευθείας — γρήγορη απάντηση, φιλική εξυπηρέτηση." },
      ],
      bgs: [skyPale, pinkPale, orangePale, skyPale],
    },
    contact: {
      tag: "Επικοινωνία",
      headline1: "Ας ξεκινήσουμε",
      headline2: "το έργο σας.",
      blurb: "Θέλετε να φτιάξετε τη βρύση, να φρεσκάρετε την εξωτερική εμφάνιση ή να τακτοποιήσετε τον κήπο; Καλέστε μας — χαρούμενα προσφέρουμε δωρεάν εκτίμηση.",
      bizLabel: "Επισκευές & Φροντίδα Κήπου",
      locationLabel: "Τοποθεσία", locationValue: "Νησί Λευκάδα, Ελλάδα", locationSub: "Εξυπηρετούμε ολόκληρο το νησί & περιβάλλουσα περιοχή",
      phoneLabel: "Τηλέφωνο",
      hoursLabel: "Ώρες", hoursValue: "Δευ – Σαβ · 8:00 – 19:00", hoursSub: "Δεκτές και επείγουσες κλήσεις",
      callNow: "📞 Καλέστε Τώρα",
      formTitle: "Στείλτε μας μήνυμα",
      fields: { name: "Ονοματεπώνυμο", phone: "Τηλέφωνο", email: "Διεύθυνση email", message: "Πώς μπορούμε να βοηθήσουμε;", messagePh: "Περιγράψτε τι χρειάζεται επισκευή, βαφή ή συντήρηση…" },
      sendBtn: "Αποστολή Μηνύματος →",
      sendingBtn: "Αποστολή…",
      errorMsg: "Κάτι πήγε στραβά. Δοκιμάστε ξανά ή καλέστε μας.",
      successTitle: "Το μήνυμα στάλθηκε!",
      successSub: "Θα επικοινωνήσουμε μαζί σας σύντομα.",
      sendAnother: "Στείλτε άλλο",
    },
    footer: { rights: "Με επιφύλαξη παντός δικαιώματος." },
  },

  it: {
    nav: { about: "Chi siamo", services: "Servizi", contact: "Contatti" },
    hero: {
      location: "Isola di Leucade, Grecia",
      headline1: "Ogni lavoro fatto",
      headline2: "bene.",
      sub: "Da rubinetti che perdono a giardini curati — MarkGyver porta artigianato affidabile in ogni angolo di Leucade e dintorni.",
      cta1: "Scopri i nostri Servizi",
      cta2: "Contattaci",
    },
    about: {
      tag: "Chi Siamo",
      headline1: "Le mani di fiducia",
      headline2: "della tua isola.",
      p1: "MarkGyver è un servizio di tuttofare e cura del verde di proprietà locale, fondato su una promessa: presentarsi, fare un ottimo lavoro e lasciare le cose migliori di come le abbiamo trovate.",
      p2: "Che si tratti di un problema idraulico, una mano di vernice o la cura impeccabile del giardino in ogni stagione greca — gestiamo tutto con la stessa cura e attenzione ai dettagli.",
    },
    services: {
      tag: "Cosa Facciamo",
      headline1: "Servizi in",
      headline2: "ogni settore.",
    },
    serviceNames: {
      "Home Repairs": "Riparazioni Domestiche",
      "Painting": "Pittura",
      "Plumbing": "Idraulica",
      "Electrical": "Elettricità",
      "Carpentry": "Falegnameria",
      "Maintenance": "Manutenzione",
      "Assembly & Installations": "Montaggio & Installazioni",
      "Lawn & Outdoor Care": "Cura del Prato & Spazi Esterni",
    },
    serviceItems: {
      "General Repairs": "Riparazioni Generali", "Drywall Repair": "Riparazione Cartongesso", "Caulking & Sealing": "Sigillatura", "Odd Jobs": "Lavoretti Vari",
      "Interior Painting": "Pittura Interna", "Exterior Painting": "Pittura Esterna", "Deck & Fence Staining": "Verniciatura Deck & Recinzioni",
      "Leak Repairs": "Riparazione Perdite", "Toilet Fixes": "Riparazione WC", "Fixture Installation": "Installazione Rubinetteria",
      "Switches & Outlets": "Interruttori & Prese", "Light Fixtures": "Corpi Illuminanti", "Ceiling Fans": "Ventilatori a Soffitto", "Smart Home Setup": "Configurazione Smart Home",
      "Trim & Molding": "Cornici & Battiscopa", "Shelving": "Scaffalature", "Door & Window Repair": "Riparazione Porte & Finestre", "Deck & Fence Repair": "Riparazione Deck & Recinzioni",
      "Gutter Cleaning": "Pulizia Grondaie", "Pressure Washing": "Lavaggio ad Alta Pressione", "Weatherproofing": "Impermeabilizzazione", "Minor Roof Repairs": "Piccole Riparazioni Tetto",
      "Furniture Assembly": "Montaggio Mobili", "TV Mounting": "Installazione TV", "Appliance Installation": "Installazione Elettrodomestici",
      "Lawn Mowing": "Taglio Erba", "Weed Removal": "Rimozione Erbacce", "Hedge Trimming": "Potatura Siepi", "Leaf Cleanup": "Raccolta Foglie",
      "Mulching": "Pacciamatura", "Garden Bed Maintenance": "Manutenzione Aiuole", "Tree Limb Cutting": "Potatura Alberi", "Outdoor Cleanup": "Pulizia Spazi Esterni",
    },
    whyUs: {
      tag: "Perché Sceglierci",
      headline1: "Fondati sulla fiducia,",
      headline2: "consegnati con cura.",
      points: [
        { icon: "🏝️", label: "Copertura Isola",      desc: "Serviamo tutta Leucade e i dintorni — nessun lavoro è troppo lontano." },
        { icon: "🤝", label: "Affidabili & Onesti",   desc: "Preventivi chiari, nessun costo nascosto e lavoro consegnato nei tempi." },
        { icon: "🔨", label: "Tutti i Mestieri",      desc: "Una chiamata copre riparazioni, pittura, idraulica, elettricità e giardinaggio." },
        { icon: "📞", label: "Facili da Contattare",  desc: "Chiamaci direttamente — risposta rapida, servizio cordiale." },
      ],
      bgs: [skyPale, pinkPale, orangePale, skyPale],
    },
    contact: {
      tag: "Contatti",
      headline1: "Iniziamo il tuo",
      headline2: "progetto.",
      blurb: "Vuoi riparare quel rubinetto, rinnovare l'esterno o finalmente sistemare il giardino? Chiamaci — siamo felici di fare un preventivo gratuito.",
      bizLabel: "Tuttofare & Cura del Verde",
      locationLabel: "Posizione", locationValue: "Isola di Leucade, Grecia", locationSub: "Serviamo tutta l'isola e i dintorni",
      phoneLabel: "Telefono",
      hoursLabel: "Orari", hoursValue: "Lun – Sab · 8:00 – 19:00", hoursSub: "Chiamate urgenti accettate",
      callNow: "📞 Chiama Ora",
      formTitle: "Inviaci un messaggio",
      fields: { name: "Il tuo nome", phone: "Numero di telefono", email: "Indirizzo email", message: "Come possiamo aiutarti?", messagePh: "Descrivi cosa deve essere riparato, verniciato o manutenuto…" },
      sendBtn: "Invia Messaggio →",
      sendingBtn: "Invio in corso…",
      errorMsg: "Qualcosa è andato storto. Riprova o chiamaci.",
      successTitle: "Messaggio inviato!",
      successSub: "Ti risponderemo a breve.",
      sendAnother: "Invia un altro",
    },
    footer: { rights: "Tutti i diritti riservati." },
  },
} as const;

/* ── Language context ─────────────────────────────────────────────── */
const LangCtx = createContext<Lang>("en");
function useLang() { return useContext(LangCtx); }
function useT() { return T[useLang()]; }

/* ── Language switcher ────────────────────────────────────────────── */
function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const options: { code: Lang; label: string; flag: string }[] = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "el", label: "ΕΛ", flag: "🇬🇷" },
    { code: "it", label: "IT", flag: "🇮🇹" },
  ];
  return (
    <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.12)", borderRadius: "50px", padding: "3px", gap: "2px" }}>
      {options.map(o => (
        <button
          key={o.code}
          onClick={() => setLang(o.code)}
          style={{
            background: lang === o.code ? "#fff" : "transparent",
            color: lang === o.code ? ink : "rgba(255,255,255,0.75)",
            border: "none", cursor: "pointer",
            borderRadius: "50px",
            padding: "0.25rem 0.65rem",
            fontSize: "0.78rem", fontWeight: 700,
            letterSpacing: "0.05em",
            fontFamily: "var(--font-body)",
            transition: "all 0.2s",
            display: "flex", alignItems: "center", gap: "0.3rem",
            whiteSpace: "nowrap",
          }}
          title={o.code === "en" ? "English" : o.code === "el" ? "Ελληνικά" : "Italiano"}
        >
          <span>{o.flag}</span>
          <span>{o.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ── Nav ──────────────────────────────────────────────────────────── */
function Nav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style={{
        background: skyDeep,
        backdropFilter: "blur(8px)",
        boxShadow: scrolled ? "0 2px 16px rgba(30,92,138,0.18)" : "none",
        transition: "box-shadow 0.25s",
        gap: "1rem",
      }}
    >
      <div className="flex items-center">
        <img
          src={logo}
          alt="MarkGyver — Handyman and Lawn Care Services"
          style={{ height: "50px", objectFit: "contain", mixBlendMode: "screen" }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
        {(["about", "services", "contact"] as const).map(key => (
          <a key={key} href={`#${key}`}
            style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1rem", transition: "color 0.2s", whiteSpace: "nowrap" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#ffd6a0")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
          >{t.nav[key]}</a>
        ))}
        <LangSwitcher lang={lang} setLang={setLang} />
        <a
          href="tel:+306909089265"
          style={{ background: pink, color: "#fff", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.05em", padding: "0.45rem 1.2rem", borderRadius: "50px", textDecoration: "none", transition: "background 0.2s", boxShadow: "0 4px 12px rgba(232,64,122,0.3)", whiteSpace: "nowrap" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#c72e65")}
          onMouseLeave={e => (e.currentTarget.style.background = pink)}
        >
          (+30) 690 908 9265
        </a>
      </div>
    </nav>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────── */
function Hero() {
  const t = useT().hero;
  return (
    <section className="relative flex flex-col items-start justify-end overflow-hidden" style={{ minHeight: "100vh", paddingTop: "80px" }}>
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1680798790180-540f147976d7?w=1600&h=1000&fit=crop&auto=format" alt="Craftsman workbench with tools" className="w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.9)" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${skyDeep}dd 0%, ${skyDeep}55 50%, transparent 100%)` }} />
      </div>
      <div className="relative z-10 px-8 pb-20 max-w-4xl" style={{ paddingLeft: "clamp(1.5rem, 6vw, 6rem)" }}>
        <p style={{ color: "#ffd6a0", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1rem" }}>{t.location}</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 6rem)", color: "#ffffff", fontWeight: 700, lineHeight: 1.05, marginBottom: "1.5rem" }}>
          {t.headline1}<br /><em style={{ color: "#ffa07a" }}>{t.headline2}</em>
        </h1>
        <p style={{ color: "#c8dff0", fontSize: "1.15rem", maxWidth: "520px", lineHeight: 1.7, fontWeight: 300, marginBottom: "2.5rem" }}>{t.sub}</p>
        <div className="flex flex-wrap gap-4">
          <a href="#services" style={{ background: pink, color: "#fff", fontWeight: 600, fontSize: "0.95rem", padding: "0.8rem 2rem", borderRadius: "50px", textDecoration: "none", transition: "background 0.2s", boxShadow: "0 6px 20px rgba(232,64,122,0.35)" }} onMouseEnter={e => (e.currentTarget.style.background = "#c72e65")} onMouseLeave={e => (e.currentTarget.style.background = pink)}>{t.cta1}</a>
          <a href="#contact" style={{ border: "2px solid rgba(255,255,255,0.45)", color: "#fff", fontWeight: 500, fontSize: "0.95rem", padding: "0.8rem 2rem", borderRadius: "50px", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#ffa07a"; e.currentTarget.style.color = "#ffa07a"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)"; e.currentTarget.style.color = "#fff"; }}>{t.cta2}</a>
        </div>
      </div>
    </section>
  );
}

/* ── About ────────────────────────────────────────────────────────── */
function About() {
  const t = useT().about;
  const narrow = useNarrow();
  return (
    <section id="about" style={{ background: "#fff", padding: "6rem clamp(1.5rem,6vw,6rem)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr", gap: narrow ? "2rem" : "4rem", alignItems: "center" }}>
        <div>
          <p style={{ color: pink, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>{t.tag}</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", color: ink, fontWeight: 700, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            {t.headline1}<br /><em style={{ color: sky }}>{t.headline2}</em>
          </h2>
          <p style={{ color: muted, fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.2rem" }}>{t.p1}</p>
          <p style={{ color: muted, fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 300 }}>{t.p2}</p>
        </div>
        <div className="relative" style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "4/3", boxShadow: `0 16px 48px rgba(30,92,138,0.14)` }}>
          <img src="https://images.unsplash.com/photo-1775652836010-63a679315675?w=800&h=600&fit=crop&auto=format" alt="Coastal town with sailboats in a blue bay" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${sky}22 0%, transparent 60%)` }} />
        </div>
      </div>
    </section>
  );
}

/* ── Services ─────────────────────────────────────────────────────── */
const SERVICE_DATA = [
  { icon: "🧰", key: "Home Repairs",            items: ["General Repairs","Drywall Repair","Caulking & Sealing","Odd Jobs"] },
  { icon: "🎨", key: "Painting",                items: ["Interior Painting","Exterior Painting","Deck & Fence Staining"] },
  { icon: "🔧", key: "Plumbing",                items: ["Leak Repairs","Toilet Fixes","Fixture Installation"] },
  { icon: "💡", key: "Electrical",              items: ["Switches & Outlets","Light Fixtures","Ceiling Fans","Smart Home Setup"] },
  { icon: "🪚", key: "Carpentry",               items: ["Trim & Molding","Shelving","Door & Window Repair","Deck & Fence Repair"] },
  { icon: "🏡", key: "Maintenance",             items: ["Gutter Cleaning","Pressure Washing","Weatherproofing","Minor Roof Repairs"] },
  { icon: "🛋️", key: "Assembly & Installations",items: ["Furniture Assembly","TV Mounting","Appliance Installation"] },
  { icon: "🌿", key: "Lawn & Outdoor Care",     items: ["Lawn Mowing","Weed Removal","Hedge Trimming","Leaf Cleanup","Mulching","Garden Bed Maintenance","Tree Limb Cutting","Outdoor Cleanup"] },
] as const;

function ServiceCard({ icon, titleKey, itemKeys }: { icon: string; titleKey: string; itemKeys: readonly string[] }) {
  const t = useT();
  const [hovered, setHovered] = useState(false);
  const title = (t.serviceNames as Record<string, string>)[titleKey] ?? titleKey;
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? skyDeep : "#fff", border: `2px solid ${hovered ? sky : border}`, borderRadius: "14px", padding: "1.75rem", transition: "all 0.25s", boxShadow: hovered ? `0 8px 32px rgba(74,174,224,0.2)` : "0 2px 8px rgba(30,58,95,0.06)", cursor: "default" }}>
      <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: hovered ? "#fff" : ink, marginBottom: "0.9rem", transition: "color 0.25s" }}>{title}</h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {itemKeys.map(k => (
          <li key={k} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: hovered ? "#c8e8f8" : muted, padding: "0.2rem 0", fontWeight: 400, transition: "color 0.25s" }}>
            <span style={{ color: hovered ? "#ffa07a" : orange, fontWeight: 700, fontSize: "0.7rem" }}>▸</span>
            {(t.serviceItems as Record<string, string>)[k] ?? k}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  const t = useT().services;
  return (
    <section id="services" style={{ background: skyPale, padding: "6rem clamp(1.5rem,6vw,6rem)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ color: sky, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>{t.tag}</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", color: ink, fontWeight: 700, lineHeight: 1.1 }}>
            {t.headline1}<br /><em style={{ color: pink }}>{t.headline2}</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {SERVICE_DATA.map(s => <ServiceCard key={s.key} icon={s.icon} titleKey={s.key} itemKeys={s.items} />)}
        </div>
      </div>
    </section>
  );
}

/* ── Why Us ───────────────────────────────────────────────────────── */
function WhyUs() {
  const t = useT().whyUs;
  return (
    <section style={{ background: "#fff", padding: "5rem clamp(1.5rem,6vw,6rem)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: orange, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>{t.tag}</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: ink, fontWeight: 700, lineHeight: 1.1, marginBottom: "3rem" }}>
          {t.headline1}<br /><em style={{ color: sky }}>{t.headline2}</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
          {t.points.map((p, i) => (
            <div key={p.label} style={{ background: t.bgs[i], borderRadius: "14px", padding: "1.75rem" }}>
              <div style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>{p.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: ink, fontWeight: 600, marginBottom: "0.5rem" }}>{p.label}</h3>
              <p style={{ color: muted, fontSize: "0.92rem", lineHeight: 1.7, fontWeight: 300 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ──────────────────────────────────────────────────────── */
function Contact() {
  const t = useT().contact;
  const narrow = useNarrow();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  const fieldStyle: React.CSSProperties = {
    width: "100%", boxSizing: "border-box",
    background: skyPale, border: `1.5px solid ${border}`, borderRadius: "8px",
    padding: "0.7rem 1rem", fontSize: "0.95rem", color: ink,
    fontFamily: "var(--font-body)", outline: "none", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ background: pinkPale, padding: "6rem clamp(1.5rem,6vw,6rem)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: pink, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>{t.tag}</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", color: ink, fontWeight: 700, lineHeight: 1.1, marginBottom: "3rem" }}>
          {t.headline1}<br /><em style={{ color: orange }}>{t.headline2}</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr", gap: narrow ? "2rem" : "3rem", alignItems: "start" }}>

          {/* Business contact card */}
          <div style={{ background: "#fff", borderRadius: "16px", padding: "2.5rem", border: `2px solid ${border}`, boxShadow: `0 8px 32px rgba(30,92,138,0.10)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: `1.5px solid ${border}` }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: `linear-gradient(135deg, ${sky}, ${skyDeep})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>🔧</div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: ink, fontStyle: "italic" }}>MarkGyver</div>
                <div style={{ fontSize: "0.8rem", color: muted, letterSpacing: "0.05em" }}>{t.bizLabel}</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              <ContactRow icon="📍" label={t.locationLabel} value={t.locationValue} sub={t.locationSub} />
              <ContactRow icon="📞" label={t.phoneLabel} value="(+30) 690 908 9265" href="tel:+306909089265" />
              <ContactRow icon="🕐" label={t.hoursLabel} value={t.hoursValue} sub={t.hoursSub} />
            </div>
            <a href="tel:+306909089265"
              style={{ display: "block", textAlign: "center", background: `linear-gradient(135deg, ${pink}, ${orange})`, color: "#fff", fontWeight: 600, fontSize: "1rem", padding: "0.9rem", borderRadius: "50px", textDecoration: "none", transition: "opacity 0.2s", boxShadow: "0 6px 20px rgba(232,64,122,0.25)" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.87")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >{t.callNow}</a>
          </div>

          {/* Customer contact form */}
          <div style={{ background: "#fff", borderRadius: "16px", padding: "2.5rem", border: `2px solid ${border}`, boxShadow: `0 8px 32px rgba(30,92,138,0.10)` }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "1.6rem", color: ink, marginBottom: "0.5rem" }}>{t.successTitle}</h3>
                <p style={{ color: muted, fontWeight: 300 }}>{form.name ? `${t.successSub.replace(".", ",")} ${form.name}!` : t.successSub}</p>
                <button onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", message: "" }); }}
                  style={{ marginTop: "1.5rem", background: skyPale, border: `1.5px solid ${border}`, borderRadius: "50px", padding: "0.6rem 1.4rem", color: ink, fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9rem", cursor: "pointer" }}
                >{t.sendAnother}</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "1.3rem", color: ink, marginBottom: "1.5rem" }}>{t.formTitle}</h3>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {([["name", "text", t.fields.name], ["phone", "tel", t.fields.phone], ["email", "email", t.fields.email]] as [keyof typeof form, string, string][]).map(([key, type, label]) => (
                    <div key={key}>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: muted, marginBottom: "0.35rem" }}>{label}</label>
                      <input type={type} value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} required={key !== "phone"} style={fieldStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = sky)} onBlur={e => (e.currentTarget.style.borderColor = border)} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: muted, marginBottom: "0.35rem" }}>{t.fields.message}</label>
                    <textarea rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder={t.fields.messagePh} required
                      style={{ ...fieldStyle, borderRadius: "10px", resize: "vertical" }}
                      onFocus={e => (e.currentTarget.style.borderColor = sky)} onBlur={e => (e.currentTarget.style.borderColor = border)} />
                  </div>
                  <input type="text" name="website" value={website} onChange={e => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
                  {error && <p role="alert" style={{ color: pink, fontSize: "0.9rem", margin: 0 }}>{t.errorMsg}</p>}
                  <button type="submit" disabled={sending}
                    style={{ background: `linear-gradient(135deg, ${sky}, ${skyDeep})`, color: "#fff", fontWeight: 600, fontSize: "1rem", padding: "0.9rem", borderRadius: "50px", border: "none", cursor: sending ? "wait" : "pointer", opacity: sending ? 0.7 : 1, transition: "opacity 0.2s", boxShadow: `0 6px 20px rgba(74,174,224,0.3)`, marginTop: "0.25rem" }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.87")} onMouseLeave={e => (e.currentTarget.style.opacity = sending ? "0.7" : "1")}
                  >{sending ? t.sendingBtn : t.sendBtn}</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, sub, href }: { icon: string; label: string; value: string; sub?: string; href?: string }) {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
      <div style={{ width: "36px", height: "36px", background: skyPale, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontSize: "0.75rem", color: muted, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.2rem" }}>{label}</div>
        {href ? <a href={href} style={{ fontWeight: 600, color: sky, fontSize: "1rem", textDecoration: "none" }}>{value}</a>
               : <div style={{ fontWeight: 600, color: ink, fontSize: "1rem" }}>{value}</div>}
        {sub && <div style={{ fontSize: "0.83rem", color: muted, marginTop: "0.15rem" }}>{sub}</div>}
      </div>
    </div>
  );
}

/* ── Footer ───────────────────────────────────────────────────────── */
function Footer() {
  const t = useT().footer;
  return (
    <footer style={{ background: skyDeep, color: "rgba(255,255,255,0.6)", padding: "2.5rem clamp(1.5rem,6vw,6rem)", textAlign: "center" }}>
      <img src={logo} alt="MarkGyver" style={{ height: "44px", objectFit: "contain", mixBlendMode: "screen", marginBottom: "0.75rem" }} />
      <p style={{ fontSize: "0.82rem", letterSpacing: "0.05em" }}>
        Lefkada Island, Greece &nbsp;·&nbsp;
        <a href="tel:+306909089265" style={{ color: "#ffa07a", textDecoration: "none", fontWeight: 600 }}>(+30) 690 908 9265</a>
      </p>
      <p style={{ fontSize: "0.75rem", marginTop: "0.75rem", color: "rgba(255,255,255,0.3)" }}>© {new Date().getFullYear()} MarkGyver. {t.rights}</p>
    </footer>
  );
}

/* ── App ──────────────────────────────────────────────────────────── */
export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangCtx.Provider value={lang}>
      <div style={{ fontFamily: "var(--font-body)" }}>
        <Nav lang={lang} setLang={setLang} />
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Contact />
        <Footer />
      </div>
    </LangCtx.Provider>
  );
}
