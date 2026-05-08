"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

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

        {/* Hamburger — mobile only */}
        <button
          className="nav__hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`hamburger-icon ${open ? "hamburger-icon--open" : ""}`}>
            <span /><span /><span />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="nav__drawer">
          <a href="#services"   className="nav__drawer-link" onClick={() => setOpen(false)}>Services</a>
          <a href="#industries" className="nav__drawer-link" onClick={() => setOpen(false)}>Industries</a>
          <a href="#why"        className="nav__drawer-link" onClick={() => setOpen(false)}>Why CSM</a>
          <a href="#tech"       className="nav__drawer-link" onClick={() => setOpen(false)}>Technology</a>
          <a href="#contact"    className="nav__drawer-link" onClick={() => setOpen(false)}>Contact</a>
          <a
            href="mailto:csm@commercialspacemanagement.com"
            className="btn btn--primary"
            style={{ marginTop: "0.8rem", width: "100%", justifyContent: "center" }}
            onClick={() => setOpen(false)}
          >
            Get a free quote
          </a>
        </div>
      )}
    </header>
  );
}
