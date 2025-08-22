import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className="testim">
      <div className="blog-section">
        <span className="ct-section">Testimonials</span>
        <span className="tsm-head">What Our Student Says About Us</span>
        <span className="ct-text">
          Hear real stories and experiences from students who’ve transformed
          their careers with our courses.
        </span>
      </div>
      <div className="Review-frame">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default Testimonials;
