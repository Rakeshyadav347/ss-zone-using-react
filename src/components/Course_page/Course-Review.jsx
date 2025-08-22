import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import PopularCourses from "../Homepage/PopularCourses";

const Course_Review = () => {
  return (
    <div className="CO">
      <Navbar />
      <div className="CO-image">
        <img className="CO-image" src="Section (1).png"></img>
      </div>
      <div className="CO-desc">
        <div className="CO-detail">
          <div className="Co-detail-head">
            <span className="CO-name">Full Stack Web Development</span>
            <span className="CO-fs">
              <span className="CO-iden">
                <img className="im-ins" src="avatar (1).png"></img>
                <span className="ON-off">
                  <p>Intructions</p>
                  <p className="naming">Dylan Meringue</p>
                </span>
              </span>
              <span className="ON-off">
                <p>categories</p>
                <p className="naming">Online Teaching</p>
              </span>
              <span className="ON-off">
                <p>Review</p>
                <img src="Rating.png"></img>
              </span>
            </span>
          </div>
          <div className="Ov-list">
            <div className="Ov-list-nav">
              <ul className="listing">
                <li>Overview </li>
                <li>Curricular</li>
                <li>Instructor</li>
                <li>Reviews</li>
              </ul>
            </div>
          </div>
          <div className="desc-of-instruct">
            <div className="desc-review">
              <span className="write-com">
                <img src="avatar.png"></img>
                <span className="ad-com">
                  <input
                    className="ad-com1"
                    type="text"
                    placeholder="Add a comment.."
                  />
                </span>
              </span>
              <div className="read-review">
                <div className="read-imgnam">
                  <span className="rd-imgnam">
                    <img src="avatar (2).png"></img>
                    <span className="nam-img">
                      <p>Russell Sprout</p>
                      <p>April 19, 2025 AT 10: 47 PM</p>
                    </span>
                  </span>
                  <img src="Rating.png"></img>{" "}
                </div>
                <div>
                  <p>
                    Great read for beginners! I finally understand how
                    JavaScript fits in with HTML and CSS. Excited to start
                    coding!
                  </p>
                </div>
              </div>
              <div className="read-review">
                <div className="read-imgnam">
                  <span className="rd-imgnam">
                    <img src="avatar (2).png"></img>
                    <span className="nam-img">
                      <p>Russell Sprout</p>
                      <p>April 19, 2025 AT 10: 47 PM</p>
                    </span>
                  </span>
                  <img src="Rating.png"></img>{" "}
                </div>
                <div>
                  <p>
                    Great read for beginners! I finally understand how
                    JavaScript fits in with HTML and CSS. Excited to start
                    coding!
                  </p>
                </div>
              </div>
              <div className="read-review">
                <div className="read-imgnam">
                  <span className="rd-imgnam">
                    <img src="avatar (2).png"></img>
                    <span className="nam-img">
                      <p>Russell Sprout</p>
                      <p>April 19, 2025 AT 10: 47 PM</p>
                    </span>
                  </span>
                  <img src="Rating.png"></img>{" "}
                </div>
                <div>
                  <p>
                    Great read for beginners! I finally understand how
                    JavaScript fits in with HTML and CSS. Excited to start
                    coding!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CO-include">
          <span>
            <img src="Frame 1000003098.png"></img>
          </span>
          <span>₹4,999 </span>
          <button className="addcart">ADD TO CART</button>

          <span className="instruct">
            <span>
              <p>This Course Includes:</p>
            </span>
            <span className="CO-instruct">
              <img src="play.png"></img>
              <p> 62 hours on-demand video</p>
            </span>{" "}
            <span className="CO-instruct">
              <img src="user.png"></img>
              <p>Dylan meringue instructor</p>
            </span>{" "}
            <span className="CO-instruct">
              <img src="Language.png"></img>
              <p>English language</p>
            </span>{" "}
            <span className="CO-instruct">
              <img src="Chart.png"></img>
              <p>Advanced level</p>
            </span>{" "}
            <span className="CO-instruct">
              <img src="Certificate (1).png"></img>
              <p>Certificate of completion</p>
            </span>{" "}
            <span className="CO-instruct">
              <img src="Mobile.png"></img>
              <p>Access on mobile and TV</p>
            </span>{" "}
          </span>
          <div className="share">
            <span>Share it:</span>
            <span>
              <img src="Icon.png"></img>
            </span>
          </div>
        </div>
      </div>
      <PopularCourses />
      <Footer />
    </div>
  );
};
export default Course_Review;
