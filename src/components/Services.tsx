export default function Services() {
  return (
    <section className="services" id="services">
      <header className="section-head">
        <span className="pill-eyebrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
          </svg>
          Services
        </span>
        <h2 className="section-head__title">Programs built around your facility — not the other way around.</h2>
        <p className="section-head__sub">Every CSM proposal is custom-engineered to your space, schedule, and budget. From nightly office cleaning to specialty restoration, we deliver consistent, audit-ready results.</p>
      </header>

      {/* Wide feature card with dashboard */}
      <article className="feature-card feature-card--wide">
        <div className="feature-card__copy">
          <h3 className="feature-card__title">Nightly janitorial &amp; daily porter service</h3>
          <p className="feature-card__body">Recurring service plans tuned to your foot traffic, occupancy, and finish materials. Track every visit, every task, every issue resolved — all in one client dashboard.</p>
          <a href="#contact" className="btn btn--primary">Explore programs</a>
        </div>

        <div className="feature-card__mock dashboard" aria-hidden="true">
          <div className="dashboard__head">
            <div className="dashboard__client">
              <span className="dashboard__client-mark">PG</span>
              <div>
                <div className="dashboard__client-name">
                  Park Gateway Plaza
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </div>
                <div className="dashboard__client-sub">12 floors · 184,000 sqft</div>
              </div>
            </div>
            <div className="dashboard__avatars">
              <span className="ava" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces')" }} />
              <span className="ava" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces')" }} />
              <span className="ava" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces')" }} />
              <span className="ava ava--more">+5</span>
            </div>
          </div>

          <div className="dashboard__metrics">
            <div className="dashboard__metric">
              <div className="dashboard__metric-label">On-time visits this month</div>
              <div className="dashboard__metric-value">98.4%</div>
            </div>
            <div className="dashboard__metric">
              <div className="dashboard__metric-label">Issues resolved &lt; 4h</div>
              <div className="dashboard__metric-value">100%</div>
            </div>
          </div>

          <div className="dashboard__chart">
            <div className="chart-bars">
              <div className="chart-bar" style={{ height: "38%" }}><span>Mon</span></div>
              <div className="chart-bar" style={{ height: "54%" }}><span>Tue</span></div>
              <div className="chart-bar" style={{ height: "42%" }}><span>Wed</span></div>
              <div className="chart-bar" style={{ height: "71%" }}><span>Thu</span></div>
              <div className="chart-bar chart-bar--active" style={{ height: "88%" }}><span>Fri</span></div>
              <div className="chart-bar" style={{ height: "46%" }}><span>Sat</span></div>
              <div className="chart-bar" style={{ height: "36%" }}><span>Sun</span></div>
            </div>
            <div className="chart-axis"><span>0</span><span>5k</span><span>10k</span></div>
          </div>
        </div>
      </article>

      {/* Two side-by-side feature cards */}
      <div className="feature-row">
        <article className="feature-card">
          <div className="feature-card__copy">
            <h3 className="feature-card__title">Smart inspection reports</h3>
            <p className="feature-card__body feature-card__body--sm">QR-coded checkpoints, photo-verified completion, and instant audit logs delivered to your inbox after every shift.</p>
          </div>
          <div className="feature-card__mock notif">
            <div className="notif__head">
              <span>Tonight&apos;s report</span>
              <button className="notif__save">Export</button>
            </div>
            <ul className="notif__list">
              <li><span className="notif__dot notif__dot--ok" />Lobby &amp; entrances <em>Verified</em><span className="toggle toggle--on" /></li>
              <li><span className="notif__dot notif__dot--ok" />Restrooms (12) <em>Verified</em><span className="toggle toggle--on" /></li>
              <li><span className="notif__dot notif__dot--mid" />Conference rooms <em>3 follow-ups</em><span className="toggle toggle--off" /></li>
              <li><span className="notif__dot notif__dot--ok" />Breakrooms <em>Verified</em><span className="toggle toggle--on" /></li>
              <li className="notif__list-muted"><span className="notif__dot" />Garage sweep <em>Scheduled 5:30am</em><span className="toggle toggle--off" /></li>
            </ul>
          </div>
        </article>

        <article className="feature-card">
          <div className="feature-card__copy">
            <h3 className="feature-card__title">Live request &amp; dispatch</h3>
            <p className="feature-card__body feature-card__body--sm">Spill in suite 402? Tag it from your phone — a CSM tech is dispatched and you&apos;ll see status updates in real time.</p>
          </div>
          <div className="feature-card__mock activity">
            <div className="activity__head">
              <span>Activity</span>
              <button className="activity__msg-btn">+ Message</button>
            </div>
            <div className="activity__item">
              <span className="ava ava--sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces')" }} />
              <div>
                <div className="activity__name">Marcus W. <span className="activity__role">· Lead Tech</span></div>
                <div className="activity__msg-text">En route to Suite 402 — ETA 8 min. Carrying spill kit and mat.</div>
              </div>
              <span className="activity__time">just now</span>
            </div>
            <div className="activity__item">
              <span className="ava ava--sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces')" }} />
              <div>
                <div className="activity__name">Lena R. <span className="activity__role">· Account Manager</span></div>
                <div className="activity__attach">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 3 H6 a2 2 0 0 0 -2 2 v14 a2 2 0 0 0 2 2 h12 a2 2 0 0 0 2 -2 V9 Z" /><path d="M14 3 v6 h6" />
                  </svg>
                  April invoice &amp; service log uploaded
                </div>
              </div>
              <span className="activity__time">2h</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
