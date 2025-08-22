import Footer from "./Homepage/Footer";
import Navbar from "./Homepage/Navbar";

const ContactUspage = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src="Contact us.png"></img>
      </div>
      <div className="S-message">
        <div className="S-message1">
          <span className="ct-section">GET IN TOUCH</span>
          <span className="ct-head">We're here to help.</span>
          <span className="al-img-det">
            <span>
              <img src="Location.png"></img>
            </span>
            <span>
              <p className="HO">Head Office</p>
              <p className="HT">GMS Road Dehradun, Uttarakhand, India</p>
            </span>
          </span>
          <span className="al-img-det">
            <span>
              <img src="Location.png"></img>
            </span>
            <span>
              <p className="HO">Email Support</p>
              <p className="HT"> info@novanectar.co.in</p>
            </span>
          </span>
          <span className="al-img-det">
            <span>
              <img src="Location.png"></img>
            </span>
            <span>
              <p className="HO">Let’s Talk</p>
              <p className="HT">Phone: +91 897 989 1703</p>
            </span>
          </span>
          <span className="al-img-det">
            <span>
              <img src="Location.png"></img>
            </span>
            <span>
              <p className="HO">Office Hours</p>
              <p className="HT">09:00 AM - 06:00 PM Monday - Saturday</p>
            </span>
          </span>
        </div>
        <div className="S-message2">
          <span className="ct-section">SEND US MESSAGE</span>
          <span className="ct-head">Need Help? Message</span>
          <form className="form-fields">
            <span className="form-input">
              <span className="form-input1">
                <p className="form-text">First Name</p>
                <input
                  className="en-email"
                  type="text"
                  placeholder="Enter Your First Name"
                />
              </span>
              <span className="form-input1">
                <p className="form-text">Last Name</p>
                <input
                  className="en-email"
                  type="text"
                  placeholder="Enter Your Last Name"
                />
              </span>
            </span>
            <span className="form-input">
              <span className="form-input1">
                <p className="form-text">Phone Number</p>
                <input
                  className="en-email"
                  type="number"
                  placeholder="Enter your phone number"
                />
              </span>
              <span>
                <p className="form-text">Email Address</p>
                <input
                  className="en-email"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
              </span>
            </span>
            <span>
              <p className="form-text">Subject</p>
              <input
                className="en-email1"
                type="email"
                placeholder="Enter Subject"
              />
            </span>
            <span>
              <p className="form-text">Address</p>
              <input
                className="en-email1"
                type="email"
                placeholder="Enter Your Address"
              />
            </span>
            <span>
              <p className="form-text">Message</p>
              <input
                className="en-email1"
                type="email"
                placeholder="Type Your Message Here .."
              />
            </span>
            <button className="sen-btn">Send Message</button>
          </form>
        </div>
      </div>
      <div>
        <img src="Location (4).png"></img>
      </div>
      <Footer />
    </>
  );
};

export default ContactUspage;
