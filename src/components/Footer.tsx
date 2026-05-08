export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a className="nav__brand" href="#">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="32" height="32">
                <circle cx="16" cy="16" r="16" fill="#fff" />
                <path d="M16 7.5 L18.2 13.8 L24.5 16 L18.2 18.2 L16 24.5 L13.8 18.2 L7.5 16 L13.8 13.8 Z" fill="#1E3932" />
              </svg>
            </span>
            <span className="brand-word brand-word--inverse">
              CSM
              <span className="brand-word__sub">Commercial Space Management</span>
            </span>
          </a>
          <p className="footer__about">Locally owned and operated. Serving the Triangle since 2017 — Raleigh, Durham, Cary, Chapel Hill, Morrisville, and Greensboro.</p>
          <ul className="footer__contact">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7 l9 7 l9 -7" />
              </svg>
              hello@csmcre.com
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 4 h4 l2 5 -3 2 a12 12 0 0 0 5 5 l2 -3 l5 2 v4 a2 2 0 0 1 -2 2 A18 18 0 0 1 3 6 a2 2 0 0 1 2 -2 Z" />
              </svg>
              (919) 555-0142
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 22 c -5 -3 -8 -8 -8 -13 a8 8 0 0 1 16 0 c 0 5 -3 10 -8 13 Z" /><circle cx="12" cy="9" r="3" />
              </svg>
              Raleigh, North Carolina
            </li>
          </ul>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <a href="#">Nightly janitorial</a>
            <a href="#">Day porter</a>
            <a href="#">Floor care</a>
            <a href="#">Window cleaning</a>
            <a href="#">Disinfection</a>
            <a href="#">Post-construction</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Industries</h4>
            <a href="#">Commercial properties</a>
            <a href="#">Auto dealerships</a>
            <a href="#">Property management</a>
            <a href="#">Medical &amp; healthcare</a>
            <a href="#">Banks &amp; financial</a>
            <a href="#">Government</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <a href="#">About us</a>
            <a href="#">What sets us apart</a>
            <a href="#">Technology</a>
            <a href="#">Careers</a>
            <a href="#">Customer support</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Trust</h4>
            <a href="#">Green Business Council</a>
            <a href="#">ISSA Member</a>
            <a href="#">Insurance &amp; bonding</a>
            <a href="#">Privacy</a>
            <a href="#">Service agreement</a>
          </div>
        </div>
      </div>

      <div className="footer__base">
        <span>© 2026 Commercial Space Management, LLC. All rights reserved.</span>
        <span className="footer__socials">
          <a href="#" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="9" width="4" height="12" /><circle cx="5" cy="5" r="2" />
              <path d="M10 9 h4 v2 c1 -2 3 -2 4 -2 c3 0 4 2 4 5 v7 h-4 v-6 c0 -2 -1 -2 -2 -2 c -1 0 -2 1 -2 3 v5 h-4 z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 9 V7 a2 2 0 0 1 2 -2 h2 V1 h -3 a5 5 0 0 0 -5 5 v3 H8 v4 h2 v8 h4 v-8 h3 l1 -4 z" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
