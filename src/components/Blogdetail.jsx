import Navbar from "./Homepage/Navbar";
import BlogPage from "./Homepage/Blogpage";
import Footer from "./Homepage/Footer";
const Blogdetail = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src="pexels-marcus-aurelius-4063792 1 (1).png"></img>
      </div>
      <div className="bl-detail">
        <div className="bl-detail-desc">
          <div className="Co-detail-head">
            <span className="CO-name">
              Introduction to JavaScript for the Beginner
            </span>
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
          <div className="bl-detail-para">
            JavaScript is a popular programming language used to add
            interactivity and dynamic features to websites. It works seamlessly
            with HTML and CSS to create modern, user-friendly web experiences.
            If you're new to coding, JavaScript is a great place to start—it's
            easy to learn and widely used across the web. Beginners will start
            with basics like variables, functions, loops, and conditionals.
            You'll also explore how JavaScript can interact with the DOM to
            change web page content in real time. No fancy setup is needed—just
            a browser and a simple code editor to begin. With
            consistentpractice, you’ll quickly move from basics to building real
            projects. Start your JavaScript journey today and unlock endless
            creative possibilities!
          </div>
          <div className="inst-op">
            “This blog offers a clear and beginner-friendly introduction to
            JavaScript, making it an excellent starting point for new learners.
          </div>
          <div>
            <span className="Tg-soc">
              Tags:<img src="Tags.png"></img> Social Network :
              <img src="Icon (2).png"></img>
            </span>
          </div>
        </div>
        <div className="bl-detail-post">
          <span>Recent Posts</span>
          <span className="bl-alpo">
            <span>
              <img src="istockphoto-1987424613-612x612 1.png"></img>"
            </span>
            <span className="bl-alpo-text">
              <span>
                <img src="calendar_2_line 1.png"></img> 10 Apr, 2025
              </span>{" "}
              <span>Why online Learning is the Key to Career Growth</span>{" "}
            </span>
          </span>
          <span className="bl-alpo">
            {" "}
            <span>
              <img src="istockphoto-1987424613-612x612 1.png"></img>"
            </span>
            <span className="bl-alpo-text">
              <span>
                <img src="calendar_2_line 1.png"></img> 10 Apr, 2025
              </span>{" "}
              <span>Why online Learning is the Key to Career Growth</span>{" "}
            </span>
          </span>
          <span className="bl-alpo">
            {" "}
            <span>
              <img src="istockphoto-1987424613-612x612 1.png"></img>"
            </span>
            <span className="bl-alpo-text">
              <span>
                <img src="calendar_2_line 1.png"></img> 10 Apr, 2025
              </span>{" "}
              <span>Why online Learning is the Key to Career Growth</span>{" "}
            </span>
          </span>
          <span className="bl-alpo">
            {" "}
            <span>
              <img src="istockphoto-1987424613-612x612 1.png"></img>"
            </span>
            <span className="bl-alpo-text">
              <span>
                <img src="calendar_2_line 1.png"></img> 10 Apr, 2025
              </span>{" "}
              <span>Why online Learning is the Key to Career Growth</span>{" "}
            </span>
          </span>
          <span className="bl-alpo">
            {" "}
            <span>
              <img src="istockphoto-1987424613-612x612 1.png"></img>"
            </span>
            <span className="bl-alpo-text">
              <span>
                <img src="calendar_2_line 1.png"></img> 10 Apr, 2025
              </span>
              <span>Why online Learning is the Key to Career Growth</span>{" "}
            </span>
          </span>
        </div>
      </div>

      <div className="desc-of-instruct">
        <div className="desc-review">
          <h1>Comments</h1>
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
                Great read for beginners! I finally understand how JavaScript
                fits in with HTML and CSS. Excited to start coding!
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
                Great read for beginners! I finally understand how JavaScript
                fits in with HTML and CSS. Excited to start coding!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Our-Blogs">
        <div className="blog-section">
          <span className="ct-section">RELATED BLOG</span>
          <span className="bl-head">Top Blog Picks for You</span>
          <span className="ct-text">
            Gain insights, tips, and knowledge from our most popular blog posts
            to support your learning journey.
          </span>
        </div>
        <div className="course-frame">
          <BlogPage />
          <BlogPage />
          <BlogPage />
          <BlogPage />
          <BlogPage />
          <BlogPage />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Blogdetail;
