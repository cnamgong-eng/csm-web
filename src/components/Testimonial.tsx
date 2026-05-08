export default function Testimonial() {
  return (
    <div className="testimonial-wrap">
      <figure className="testimonial">
        <div className="testimonial__mark" aria-hidden="true">
          <svg viewBox="0 0 60 60" width="48" height="48">
            <path d="M14 38 L14 26 a8 8 0 0 1 8 -8 L22 22 a4 4 0 0 0 -4 4 L18 28 h6 v10 z M34 38 L34 26 a8 8 0 0 1 8 -8 L42 22 a4 4 0 0 0 -4 4 L38 28 h6 v10 z" fill="#006241" />
          </svg>
        </div>
        <blockquote className="testimonial__quote">
          &ldquo;CSM took over five of our properties last year and the change was immediate. The crew is invisible during the day and meticulous at night, the dashboards make my month-end reporting effortless, and when something does come up, they fix it before I even pick up the phone. They&apos;re not a vendor — they&apos;re a partner.&rdquo;
        </blockquote>
        <figcaption className="testimonial__author">
          <span
            className="testimonial__avatar"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=faces')" }}
          />
          <span className="testimonial__author-info">
            <strong>Darlene Robertson</strong>
            <em>Director of Operations · Triangle Property Group</em>
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
