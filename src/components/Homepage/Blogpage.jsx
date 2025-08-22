const BlogPage = () => {
  return (
    <div className="course-card">
      <div className="course-in-item">
        <span className="course-img">
          <img
            className="sec-img"
            src="pexels-marcus-aurelius-4063792 1.png"
          ></img>
        </span>
        <span className="c-headin">
          Introduction to JavaScript for the Beginner
        </span>
        <span className="cp-text">
          Learn the fundamentals of JavaScript from scratch and start building
          interactive web pages....
        </span>
        <span className="bl-btn">
          <span className="dat">
            <img src="calendar_2_line 1.png"></img> 10 Apr, 2025
          </span>
          <button className="rm-btn">Read More </button>{" "}
        </span>
      </div>
    </div>
  );
};

export default BlogPage;
