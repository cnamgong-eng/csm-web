export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#" aria-label="Commercial Space Management home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="CSM logo" style={{ height: 40, width: "auto", display: "block" }} />
        </a>

        <nav className="nav__links" aria-label="Primary">
          <a href="#services" className="nav__link">Services</a>
          <a href="#industries" className="nav__link">Industries</a>
          <a href="#why" className="nav__link">Why CSM</a>
          <a href="#tech" className="nav__link">Technology</a>
          <a href="#contact" className="nav__link">Contact</a>
        </nav>

        <div className="nav__cta">
          <a href="mailto:csm@commercialspacemanagement.com" className="btn btn--primary">Get a free quote</a>
        </div>
      </div>
    </header>
  );
}
