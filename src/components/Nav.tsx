export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#" aria-label="Commercial Space Management home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <circle cx="16" cy="16" r="16" fill="#006241" />
              <path d="M16 7.5 L18.2 13.8 L24.5 16 L18.2 18.2 L16 24.5 L13.8 18.2 L7.5 16 L13.8 13.8 Z" fill="#fff" />
            </svg>
          </span>
          <span className="brand-word">
            CSM
            <span className="brand-word__sub">Commercial Space Management</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <a href="#services" className="nav__link">Services</a>
          <a href="#industries" className="nav__link">Industries</a>
          <a href="#why" className="nav__link">Why CSM</a>
          <a href="#tech" className="nav__link">Technology</a>
          <a href="#contact" className="nav__link">Contact</a>
        </nav>

        <div className="nav__cta">
          <a href="#contact" className="btn btn--outline-dark">Client portal</a>
          <a href="#contact" className="btn btn--primary">Get a free quote</a>
        </div>
      </div>
    </header>
  );
}
