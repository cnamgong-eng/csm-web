export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <figure className="float-avatar float-avatar--tl" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=160&h=160&fit=crop&crop=faces" alt="" />
        <span className="float-avatar__flag float-avatar__flag--right" />
      </figure>
      <figure className="float-avatar float-avatar--tr" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=faces" alt="" />
        <span className="float-avatar__flag float-avatar__flag--left" />
      </figure>
      <figure className="float-avatar float-avatar--bl" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces" alt="" />
        <span className="float-avatar__flag float-avatar__flag--right" />
      </figure>
      <figure className="float-avatar float-avatar--br" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=160&h=160&fit=crop&crop=faces" alt="" />
        <span className="float-avatar__flag float-avatar__flag--left" />
      </figure>

      <div className="hero__content">
        <span className="eyebrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 L14.5 9 L22 9.5 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9.5 L9.5 9 Z" />
          </svg>
          Triangle&apos;s trusted janitorial partner
        </span>

        <h1 className="hero__title">
          Immaculate spaces,{" "}
          <span className="hero__underline">engineered</span>
          <br />
          with people and process.
        </h1>

        <p className="hero__sub">
          CSM delivers enterprise-grade commercial cleaning to property managers, dealerships, banks, and government facilities across Raleigh, Durham, Cary, and Chapel Hill — backed by tech-forward dispatch and a 100% satisfaction guarantee.
        </p>

        <div className="hero__ctas">
          <a href="#contact" className="btn btn--primary btn--lg">Get a free quote</a>
          <a href="#services" className="btn btn--outline-dark btn--lg">See our services</a>
        </div>
      </div>

      <div className="trust-strip">
        <div className="trust-strip__lead">
          <strong>Trusted across the Triangle</strong>
          <span>200+ buildings serviced weekly</span>
        </div>
        <ul className="trust-strip__logos">
          <li>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 2 C7 7 7 12 12 22 C17 12 17 7 12 2 Z" /><path d="M12 8 v10" />
            </svg>
            <span>Green Business Council</span>
          </li>
          <li>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" /><path d="M8 12 l3 3 l5 -6" />
            </svg>
            <span>ISSA Member</span>
          </li>
          <li>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 2 L20 6 v6 c0 5 -4 8 -8 10 c -4 -2 -8 -5 -8 -10 V6 Z" />
            </svg>
            <span>Insured &amp; Bonded</span>
          </li>
          <li>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" /><path d="M12 7 v5 l3 2" />
            </svg>
            <span>Background-checked staff</span>
          </li>
          <li>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 21 h18" /><path d="M5 21 V10 l7 -5 l7 5 v11" /><path d="M9 21 v-7 h6 v7" />
            </svg>
            <span>Locally owned · est. 2017</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
