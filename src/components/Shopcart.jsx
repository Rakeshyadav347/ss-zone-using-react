import Footer from "./Homepage/Footer";
import Navbar from "./Homepage/Navbar";
import PopularCourses from "./Homepage/PopularCourses";

const Shopcart = () => {
  return (
    <>
      <Navbar />
      <div className="shopcart">
        <div className="sh-c-head">
          <span className="shop-head">Shopping Cart</span>
          <span>2 Courses in Cart</span>
        </div>
        <div className="cart-whole">
          <div className="cart-sum">
            <div className="act-cart">
              <span className="cartt">
                <span>
                  <img src="istockphoto-1987424613-612x612 1 - Copy.png"></img>
                </span>
                <span className="cart-txt">
                  <p className="para-cart"> Full Stack Web development</p>
                  <p className="para-cart">By Dylan Meringue</p>
                  <p className="para-cart">
                    4.5 <img src="Rating.png"></img>
                  </p>
                  <p className="para-cart">
                    10.5 total hours 30 Lectures All Levels
                  </p>
                </span>
              </span>
              <span>₹ 4,999</span>
              <span>Remove</span>
            </div>
            <div className="act-cart">
              <span className="cartt">
                <span>
                  <img src="istockphoto-1987424613-612x612 1 - Copy.png"></img>
                </span>
                <span className="cart-txt">
                  <p className="para-cart"> Full Stack Web development</p>
                  <p className="para-cart">By Dylan Meringue</p>
                  <p className="para-cart">
                    4.5 <img src="Rating.png"></img>
                  </p>
                  <p className="para-cart">
                    10.5 total hours 30 Lectures All Levels
                  </p>
                </span>
              </span>
              <span>₹ 4,999</span>
              <span>Remove</span>
            </div>
          </div>
          <div className="cart-totW">
            <div className="cart-tot">
              <span>Order Summary</span>
              <span className="cart-tot-txt">
                <p>SUBTOTAL</p> ₹9,998{" "}
              </span>
              <span className="cart-tot-txt">
                <p>TOTAL PROMO</p> ₹ 500
              </span>
              <span className="cart-tot-txt">
                <p>TOTAL</p> ₹ 9,498
              </span>
              <button className="checkout-btn"> CHECKOUT</button>
            </div>
            <div className="cart-pro">
              <span>Promotions</span>
              <span className="pro-txt">
                <p className="procode">
                  25BBUYVNJHV4774 is applied Udemy coupon
                </p>
                <img src="Dribble.png"></img>
              </span>
              <span className="cart-promo">
                <input
                  className="en-coup"
                  type="text"
                  placeholder="Enter Coupon"
                />{" "}
                <button className="apply-code">Apply</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <PopularCourses />
      <Footer />
    </>
  );
};
export default Shopcart;
