export default function WhyCsm() {
  return (
    <section className="why" id="why">
      <div className="why__grid" aria-hidden="true" />

      <header className="section-head section-head--inverse">
        <span className="pill-eyebrow pill-eyebrow--inverse">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12 l4 4 L19 6" />
          </svg>
          Why CSM
        </span>
        <h2 className="section-head__title section-head__title--inverse">A proven process. A guarantee that stands.</h2>
        <p className="section-head__sub section-head__sub--inverse">Every business cleans differently because every business operates differently. We start by listening, then build a program that fits — and stand behind it 100%.</p>
      </header>

      <ol className="why__steps">
        {[
          { num: "01", title: "Walk-through & scope", body: "An on-site assessment of your facility, foot traffic, finishes, and operating hours." },
          { num: "02", title: "Custom proposal", body: "A line-item plan tuned to your needs, schedule, and budget — never a copy-paste template." },
          { num: "03", title: "Onboarded crew", body: "A dedicated, background-checked team trained on your specific protocols and access requirements." },
          { num: "04", title: "Continuous QA", body: "Recurring inspections, monthly reviews, and a 100% satisfaction guarantee on every visit." },
        ].map((step) => (
          <li key={step.num} className="why-step">
            <div className="why-step__num">{step.num}</div>
            <h3 className="why-step__title">{step.title}</h3>
            <p className="why-step__body">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="guarantee">
        <div className="guarantee__seal" aria-hidden="true">
          <svg viewBox="0 0 100 100" width="84" height="84">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#cba258" strokeWidth="2" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="#cba258" strokeWidth="1" strokeDasharray="2 3" />
            <text x="50" y="46" textAnchor="middle" fontFamily="Lora, serif" fontStyle="italic" fontSize="11" fill="#cba258">100%</text>
            <text x="50" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" letterSpacing="2" fill="#cba258">CLEAN</text>
            <text x="50" y="70" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="6" letterSpacing="1.5" fill="#cba258">GUARANTEE</text>
          </svg>
        </div>
        <div className="guarantee__copy">
          <h3 className="guarantee__title">Total Satisfaction Guarantee</h3>
          <p className="guarantee__body">Not satisfied with a visit? Tell us within 24 hours and we&apos;ll re-clean the area at no charge — no quibbles, no questions. Every shift, every client, every time.</p>
        </div>
        <a href="#contact" className="btn btn--inverse">Talk to our team</a>
      </div>
    </section>
  );
}
