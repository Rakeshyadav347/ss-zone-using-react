import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import PopularCourses from "../Homepage/PopularCourses";

const Course_instructor = () => {
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
            <div className="instruct-detail">
              <span>
                <img src="Rectangle 5.png"></img>
              </span>
              <span>
                <p className="CO-name">Dylan Meringue</p>
                <p>Back-End Development</p>
                <p className="CO-desc-text">
                  This course is designed to give learners a clear and practical
                  understanding of back-end development. Whether you're new to
                  programming or looking to expand your skills, you’ll gain
                  hands-on experience with the tools and techniques used in
                  real-world development. My goal is to equip you with the
                  knowledge and confidence to build efficient, scalable
                  server-side applications from the ground up.
                </p>
              </span>
            </div>
            <span className="share">
              <p className="CO-name">Social Network : </p>
              <img src="Icon (1).png"></img>
            </span>
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
export default Course_instructor;
