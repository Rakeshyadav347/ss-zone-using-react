import Navbar from "./Homepage/Navbar";
import BlogPage from "./Homepage/Blogpage";
import Footer from "./Homepage/Footer";
const AllBlog = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src="Blog.png"></img>
      </div>
      <div className="Our-Blogs">
        <div className="blog-section">
          <span className="ct-section">OUR BLOG</span>
          <span className="bl-head">Latest Blogs</span>
          <span className="ct-text">
            Stay updated with the latest insights, tips, and trends from our
            expert blog posts.
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
export default AllBlog;
