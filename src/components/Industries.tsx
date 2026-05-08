const industries = [
  {
    title: "Commercial properties",
    copy: "Office towers, multi-tenant complexes, and corporate campuses. Lobby-grade finish from day one to year ten.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=700&fit=crop",
  },
  {
    title: "Auto dealerships",
    copy: "Showrooms, service bays, customer lounges. Detail-grade cleaning that protects your brand presentation.",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&h=700&fit=crop",
  },
  {
    title: "Property management",
    copy: "Single point of contact across your portfolio. Consolidated reporting, predictable invoicing, one accountable partner.",
    img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=900&h=700&fit=crop",
  },
  {
    title: "Medical & healthcare",
    copy: "Clinical spaces with infection-control protocols, color-coded equipment, and detailed disinfection logs.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&h=700&fit=crop",
  },
  {
    title: "Banks & financial",
    copy: "After-hours service with controlled-access protocols, bonded staff, and discreet, audit-ready records.",
    img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=900&h=700&fit=crop",
  },
  {
    title: "Government buildings",
    copy: "Municipal, state, and federal facilities. GSA-aligned standards, secure-access training, and chain-of-custody logging.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Capitol_Building_Full_View.jpg/1280px-Capitol_Building_Full_View.jpg",
  },
];

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12 h14" /><path d="M13 6 l6 6 -6 6" />
  </svg>
);

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <header className="section-head">
        <span className="pill-eyebrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21 h18" /><path d="M5 21 V8 l7 -5 l7 5 v13" />
          </svg>
          Industries we serve
        </span>
        <h2 className="section-head__title">Specialized programs for every facility we touch.</h2>
        <p className="section-head__sub">Six industries, one operating standard. Each program is built around the regulatory, safety, and image requirements of the spaces we clean.</p>
      </header>

      <div className="industry-grid">
        {industries.map((ind) => (
          <a key={ind.title} className="industry-card" href="#">
            <div className="industry-card__img" style={{ backgroundImage: `url('${ind.img}')` }} />
            <div className="industry-card__body">
              <h3 className="industry-card__title">{ind.title}</h3>
              <p className="industry-card__copy">{ind.copy}</p>
              <span className="industry-card__cta">View program <ArrowRight /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
