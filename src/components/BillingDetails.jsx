import Footer from "./Homepage/Footer";
import Navbar from "./Homepage/Navbar";

const BillingDetails = () => {
  return (
    <>
      <Navbar />
      <div className="shopcart1">
        <div className="bill-form">
          <h2>Your Details</h2>
          <form className="form-fields-bill">
            <span className="bill-input">
              <span className="form-input1">
                <p className="form-textbill">First Name</p>
                <input
                  className="en-email"
                  type="text"
                  placeholder="Enter Your First Name"
                />
              </span>
              <span className="form-input1">
                <p className="form-textbill">Last Name</p>
                <input
                  className="en-email"
                  type="text"
                  placeholder="Enter Your Last Name"
                />
              </span>
            </span>
            <span className="bill-input">
              <span className="form-input1">
                <p className="form-textbill">Phone Number</p>
                <input
                  className="en-email"
                  type="number"
                  placeholder="Enter your phone number"
                />
              </span>
              <span>
                <p className="form-textbill">Email Address</p>
                <input
                  className="en-email"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
              </span>
            </span>
            <span>
              <p className="form-textbill">Street Address</p>
              <input
                className="en-email1"
                type="email"
                placeholder="Enter Subject"
              />
            </span>
            <span className="bill-input">
              <span className="form-input1">
                <p className="form-textbill">State</p>
                <input
                  className="en-email"
                  type="number"
                  placeholder="Enter your phone number"
                />
              </span>
              <span>
                <p className="form-textbill">Town/City</p>
                <input
                  className="en-email"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
              </span>
            </span>
            <span className="bill-input">
              <span className="form-input1">
                <p className="form-textbill">Pin code</p>
                <input
                  className="en-email"
                  type="number"
                  placeholder="Enter your phone number"
                />
              </span>
              <span>
                <p className="form-textbill">Country/Region</p>
                <input
                  className="en-email"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
              </span>
            </span>
          </form>
        </div>
        <div className="pay-gateway">
          <div className="bill-tot">
            <span>Your Order</span>
            <span className="bill-tot-txt">
              <p>Full Stack Web Development</p> <p>₹ 90,000</p>
            </span>
            <span className="bill-tot-txt">
              <p>TOTAL</p> <p>₹ 91,500</p>
            </span>
          </div>
          <div className="pay-mode">
            <span>Payment Method</span>
            <span className="pay-mode-txt">
              <input type="Radio"></input>
              <p>Card payment</p>
            </span>
            <span className="pay-mode-txt">
              <input type="Radio"></input>
              <p>UPI payment</p>
            </span>
            <span>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our Privacy policy.
            </span>
            <span className="pay-mode-txt">
              <input type="checkbox"></input>
              <p> I have read and agree to the website Terms and conditions </p>
            </span>
            <button className="place-order-btn">Place Order</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default BillingDetails;
