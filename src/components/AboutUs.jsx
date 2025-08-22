import AboutCompany from "./Homepage/AboutCompany";
import FeatCompany from "./Homepage/FeatCompany";
import Footer from "./Homepage/Footer";
import Navbar from "./Homepage/Navbar";
import Testimonials from "./Homepage/Testimonials";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="About-img">
        <img src="About Us.png"></img>
      </div>
      <FeatCompany />
      <AboutCompany />
      <div className="popular-features">
        <div className="pop-section">
          <span className="ct-section">OUR TOP FEATURES</span>
          <span className="ct-head1">
            Achieve Your Goal With SSZone Technology
          </span>
          <span className="ct-text">
            Empowering you with skills and knowledge to turn your goals into
            reality.
          </span>
        </div>
        <div className="whyus">
          <div className="whyus1">
            <span>
              <img src="Education (1).png"></img>
            </span>
            <span className="us">High Quality Courses</span>
            <span className="us-text">
              Expert-designed courses crafted to deliver practical skills and
              real-world knowledge.
            </span>
          </div>
          <div className="whyus1">
            <span>
              <img src="Education (2).png"></img>
            </span>
            <span className="us">Expert Instructors</span>
            <span className="us-text">
              Learn from industry professionals with real- world experience and
              proven expertise.
            </span>
          </div>
          <div className="whyus1">
            <span>
              <img src="Certificate (2).png"></img>
            </span>
            <span className="us">Certification</span>
            <span className="us-text">
              Earn a recognized certificate to showcase your skills and boost
              your career.
            </span>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};
export default AboutUs;
