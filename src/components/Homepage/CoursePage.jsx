const CoursePage = () => {
  return (
    <div className="course-card">
      <div className="course-in-item">
        <span className="course-img">
          <img className="sec-img" src="Section.png"></img>
        </span>
        <span className="c-headin">Full Stack Web Development</span>
        <span className="cp-text">
          Become a proficient full-stack developer with this course covering
          HTML, CSS, JavaScript, React.
        </span>
        <span className="les">
          <span className="les-img">
            <img src="Document.png"></img> 20 Lessons
          </span>
          <span className="les-rate">
            {" "}
            <img src="star.png"></img> 4.8
          </span>
        </span>
        <span className="pr-btn">
          ₹ 4999 <button className="get-enroll-btn">Enroll Now</button>{" "}
        </span>
      </div>
    </div>
  );
};

export default CoursePage;
