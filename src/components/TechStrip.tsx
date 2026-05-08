const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12 l4 4 L19 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18 l6 -6 -6 -6" />
  </svg>
);

export default function TechStrip() {
  return (
    <section className="tech-strip" id="tech">
      <div className="tech-strip__inner">
        <header className="tech-strip__head">
          <span className="pill-eyebrow pill-eyebrow--inverse">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18 h2" />
            </svg>
            Built on technology
          </span>
          <h2 className="section-head__title section-head__title--inverse section-head__title--left">
            A real-time view into every space we service.
          </h2>
          <p className="section-head__sub section-head__sub--inverse section-head__sub--left">
            CSM was the first commercial cleaner in the Triangle to put inspection software, dispatch, and client communication into a single mobile platform. Your facility manager opens one app and sees everything.
          </p>

          <ul className="tech-feature-list">
            <li><CheckIcon /> QR-coded room checkpoints, photo-verified</li>
            <li><CheckIcon /> Live dispatch &amp; ETA tracking</li>
            <li><CheckIcon /> Monthly KPI &amp; consumption reports</li>
            <li><CheckIcon /> Single-pane invoicing across portfolios</li>
          </ul>
        </header>

        {/* Phone mock */}
        <div className="phone-mock" aria-hidden="true">
          <div className="phone-mock__shell">
            <div className="phone-mock__notch" />
            <div className="phone-mock__screen">
              <div className="phone-mock__bar">
                <span>9:41</span>
                <span>
                  <svg width="14" height="10" viewBox="0 0 14 10">
                    <path d="M1 9 h2 V6 H1 Z M5 9 h2 V4 H5 Z M9 9 h2 V1 H9 Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <div className="phone-mock__body">
                <div className="phone-mock__hello">Good evening, Park Gateway</div>
                <div className="phone-mock__greet">Tonight&apos;s crew is on-site. 4 of 12 zones complete.</div>
                <div className="phone-mock__progress">
                  <div className="phone-mock__progress-track">
                    <div className="phone-mock__progress-fill" />
                  </div>
                  <span>33%</span>
                </div>
                <div className="phone-mock__stack">
                  <div className="phone-row">
                    <span className="phone-row__dot phone-row__dot--ok" />
                    <div>
                      <div className="phone-row__title">Lobby &amp; main entry</div>
                      <div className="phone-row__sub">Verified · 8:42 PM</div>
                    </div>
                    <ChevronRight />
                  </div>
                  <div className="phone-row">
                    <span className="phone-row__dot phone-row__dot--ok" />
                    <div>
                      <div className="phone-row__title">Restrooms · floor 1–4</div>
                      <div className="phone-row__sub">Verified · 9:08 PM</div>
                    </div>
                    <ChevronRight />
                  </div>
                  <div className="phone-row phone-row--active">
                    <span className="phone-row__dot phone-row__dot--live" />
                    <div>
                      <div className="phone-row__title">Conference rooms</div>
                      <div className="phone-row__sub">In progress · ETA 9:55 PM</div>
                    </div>
                    <ChevronRight />
                  </div>
                  <div className="phone-row phone-row--muted">
                    <span className="phone-row__dot" />
                    <div>
                      <div className="phone-row__title">Garage sweep</div>
                      <div className="phone-row__sub">Scheduled · 5:30 AM</div>
                    </div>
                    <ChevronRight />
                  </div>
                </div>
                <button className="phone-mock__report">Send tonight&apos;s report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
