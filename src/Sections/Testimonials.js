import TestimonialsEl from "./TestimonialsEl";

export default function Testimonials() {
  return (
    <section className="testimonails-section">
      <p className="p">Our clients opinion</p>
      <h2 className="heading-secondary">Testimonials</h2>
      <div className="testimonials-content">
        <div className="testimonials-grid">
          <TestimonialsEl />
        </div>
        <div className="testimonials-draw-div"></div>
      </div>
    </section>
  );
}
