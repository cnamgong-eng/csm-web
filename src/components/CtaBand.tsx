export default function CtaBand() {
  return (
    <section className="cta-band" id="contact">
      <div className="cta-band__inner">
        <div>
          <h2 className="cta-band__title">
            Get a free, customized quote for{" "}
            <span className="cta-band__underline">your facility</span>.
          </h2>
          <p className="cta-band__sub">A 20-minute walk-through. A line-item proposal within 48 hours. No pressure, no template pricing.</p>
        </div>
        <div className="cta-band__actions">
          <a href="#" className="btn btn--outline-light btn--lg">Schedule a walk-through</a>
          <a href="#" className="btn btn--gold btn--lg">Get a free quote</a>
        </div>
      </div>
    </section>
  );
}
