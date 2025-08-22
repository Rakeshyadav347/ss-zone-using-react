import CoursePage from "./CoursePage";

const PopularCourses = () => {
  return (
    <div className="popular-courses">
      <div className="pop-section">
        <span className="ct-section">POPULAR COURSES</span>
        <span className="ct-head">Choose Our Top Courses</span>
        <span className="ct-text">
          Discover a world of knowledge and opportunities with our online
          education platform pursue a new career.
        </span>
        <span className="select-section">
          <button className="course-btn">Trending</button>
          <button className="course-btn">All Categories</button>
          <button className="course-btn"> Design</button>
          <button className="course-btn">Marketing</button>
          <button className="course-btn">Programming</button>
          <button className="course-btn">Web Design</button>
        </span>
      </div>
      <div className="course-frame">
        <CoursePage />
        <CoursePage />
        <CoursePage />
        <CoursePage />
        <CoursePage />
        <CoursePage />
        <button className="exp-all-btn">Explore All Courses </button>
      </div>
    </div>
  );
};

export default PopularCourses;
