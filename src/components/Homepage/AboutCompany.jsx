const AboutCompany = () => {
  return (
    <div className="Ab-comp">
      <div className="hero-sec1">
        <span className="welcome-text">About us</span>
        <span className="hero-text-comp">
          {" "}
          <h1 className="hero-title">Start Learning With Skills Hunt Now.</h1>
        </span>
        <span className="sl-text">
          Tap into your full potential with online courses guided by industry
          experts. Master high-demand skills on your schedule and take control
          of your career journey today.
        </span>

        <span className="perk-sec">
          <span className="perk-learn">
            <img src="Learning.png"></img>Start learning from our experts
          </span>
          <span className="perk-learn">
            <img src="Book.png"></img> Enhance your skills with us now
          </span>
          <span className="perk-learn">
            <img src="Education.png"></img>Do the professional level Courses
          </span>
          <span className="perk-learn">
            <img src="certificate.png"></img>Get our verified Certificate
          </span>
        </span>

        <button className="enroll-btn">Browse Courses</button>
      </div>
      <div className="sec-two-abcomp">
        <span>
          <img src="image04.png"></img>
        </span>
        <span>
          <img src="pexels-julia-m-cameron-4144224 1.png"></img>
        </span>
      </div>
    </div>
  );
};

export default AboutCompany;
