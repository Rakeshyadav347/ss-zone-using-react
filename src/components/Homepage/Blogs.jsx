import BlogPage from "./Blogpage";

const Blogs = () => {
  return (
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

        <button className="exp-all-btn">Explore All Blogs </button>
      </div>
    </div>
  );
};

export default Blogs;
