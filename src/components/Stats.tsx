const stats = [
  { num: "2017",   label: "Year founded" },
  { num: "200+",   label: "Buildings serviced weekly" },
  { num: "3.4M",   label: "Sq ft cleaned per month" },
  { num: "98.4%",  label: "On-time visit rate" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__grid">
        {stats.map((s) => (
          <div key={s.label} className="stats__item">
            <div className="stats__num">{s.num}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
