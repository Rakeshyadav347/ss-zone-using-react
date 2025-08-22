import Faqs from "./Faqs";

const Faq = () => {
  return (
    <div className="testim">
      <div className="blog-section">
        <span className="ct-section">QUICK ANSWERS</span>
        <span className="tsm-head">Frequently Asked Questions</span>
        <span className="ct-text">
          Find clear answers to common questions about our courses, platform,
          and learning experience.
        </span>
      </div>
      <div className="faq-frame">
        <Faqs />
      </div>
    </div>
  );
};

export default Faq;
