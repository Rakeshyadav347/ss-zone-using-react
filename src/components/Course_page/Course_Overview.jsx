import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import PopularCourses from "../Homepage/PopularCourses";
const Course_Overview = () => {
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
          <div className="desc-of-course">
            <span className="CO-name">Description</span>
            <span className="CO-desc-text">
              Dive into the world of Full Stack Web Development and learn how to
              build complete, dynamic web applications from start to finish.
              This course covers both front-end and back-end technologies,
              giving you a solid foundation in HTML, CSS, JavaScript,
              server-side programming, databases, APIs, and deployment. Whether
              you're designing user-friendly interfaces or writing powerful
              server logic, you’ll gain hands-on experience with real-world
              projects. Perfect for beginners or aspiring developers looking to
              become versatile and job-ready in the tech industry.
            </span>
            <span className="CO-name">What you will learn?</span>
            <span className="learn">
              <span className="CO-learn">
                <img src="checkmark-circle-02.png"></img>
                <p className="CO-desc-text">
                  Build responsive websites using HTML, CSS, and JavaScript.
                </p>
              </span>
              <span className="CO-learn">
                <img src="checkmark-circle-02.png"></img>
                <p className="CO-desc-text">
                  Develop dynamic web applications with front-end frameworks.
                </p>
              </span>
              <span className="CO-learn">
                <img src="checkmark-circle-02.png"></img>
                <p className="CO-desc-text">
                  Create and manage server-side logic with backend technologies.
                </p>
              </span>
              <span className="CO-learn">
                <img src="checkmark-circle-02.png"></img>
                <p className="CO-desc-text">
                  Work with databases and perform CRUD operations.
                </p>
              </span>
              <span className="CO-learn">
                <img src="checkmark-circle-02.png"></img>
                <p className="CO-desc-text">
                  Connect frontend and backend using RESTful APIs.
                </p>
              </span>
              <span className="CO-learn">
                <img src="checkmark-circle-02.png"></img>
                <p className="CO-desc-text">
                  Deploy full stack applications to live servers.
                </p>
              </span>
              <span className="CO-learn">
                <img src="checkmark-circle-02.png"></img>
                <p className="CO-desc-text">
                  Understand version control with Git and GitHub.
                </p>
              </span>
              <span className="CO-learn">
                <img src="checkmark-circle-02.png"></img>
                <p className="CO-desc-text">
                  Gain real-world experience through hands-on projects.
                </p>
              </span>
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

export default Course_Overview;
