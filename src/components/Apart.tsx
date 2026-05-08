const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" /><path d="M4 21 v-1 a8 8 0 0 1 16 0 v1" />
      </svg>
    ),
    title: "Hand-picked, deeply trained crews",
    body: "Every technician completes 40+ hours of onboarding and a quarterly recertification. Background-checked, drug-screened, uniformed.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12 h4 l3 -8 l4 16 l3 -8 h4" />
      </svg>
    ),
    title: "Quality control you can audit",
    body: "Photo-verified inspections, monthly KPI reviews, and full chain-of-custody logging on every account. Nothing happens off the record.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22 c -5 -3 -8 -8 -8 -13 a8 8 0 0 1 16 0 c 0 5 -3 10 -8 13 Z" /><circle cx="12" cy="9" r="3" />
      </svg>
    ),
    title: "Certified green-cleaning protocols",
    body: "EPA-registered, low-VOC products and HEPA-grade equipment. Healthy buildings, healthy occupants, healthy bottom line.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" /><path d="M12 7 v5 l3 2" />
      </svg>
    ),
    title: "Always-on communication",
    body: "One account manager, one phone number, one shared dashboard. Average issue acknowledgement: under 18 minutes, 24/7.",
  },
];

export default function Apart() {
  return (
    <section className="apart">
      <div className="apart__media">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=1400&fit=crop"
          alt="CSM technician detailing a polished glass entryway"
        />
        <span className="apart__badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2 C7 7 7 12 12 22 C17 12 17 7 12 2 Z" />
          </svg>
          Certified green cleaning
        </span>
      </div>

      <div className="apart__content">
        <span className="pill-eyebrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2 L14 9 L21 9 L15 13 L17 21 L12 16 L7 21 L9 13 L3 9 L10 9 Z" />
          </svg>
          What sets us apart
        </span>
        <h2 className="section-head__title section-head__title--left">Uncompromising standards from the people up.</h2>
        <p className="section-head__sub section-head__sub--left">We compete on professionalism — not price. Strict QA, contracted service standards, and a leadership team that personally walks every account.</p>

        <ul className="apart__list">
          {pillars.map((p) => (
            <li key={p.title}>
              <div className="apart__icon">{p.icon}</div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
