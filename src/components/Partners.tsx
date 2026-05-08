const partners = [
  { name: "3M",              desc: "Floor & finish systems" },
  { name: "Diversey",        desc: "Disinfection chemistry" },
  { name: "Tennant",         desc: "Auto-scrubbers" },
  { name: "ProTeam",         desc: "HEPA backpack vacs" },
  { name: "GreenSeal",       desc: "Certified products" },
  { name: "Rubbermaid",      desc: "Commercial systems" },
  { name: "Kärcher",         desc: "Pressure & extraction" },
  { name: "Spartan",         desc: "Green chemistry" },
  { name: "Unger",           desc: "Glass & high-dust" },
  { name: "Ecolab",          desc: "Hygiene programs" },
  { name: "Georgia-Pacific", desc: "Restroom dispensing" },
  { name: "Kimberly-Clark",  desc: "Paper & wipers" },
];

export default function Partners() {
  return (
    <section className="partners">
      <header className="section-head">
        <span className="pill-eyebrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" /><circle cx="18" cy="18" r="3" />
          </svg>
          Equipment &amp; partners
        </span>
        <h2 className="section-head__title">The right tools, the right chemistry, every shift.</h2>
        <p className="section-head__sub">We standardize on commercial-grade, EPA-registered equipment and supplies — so service quality stays consistent across every account in our portfolio.</p>
      </header>

      <div className="partner-grid">
        {partners.map((p) => (
          <div key={p.name} className="partner-tile">
            <span>{p.name}</span>
            <em>{p.desc}</em>
          </div>
        ))}
      </div>
    </section>
  );
}
