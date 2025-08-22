const HeroSection = () => {
  return (
    <div className="hero-section ">
      <div className="hero-mid  ">
        <div className="hero-sec1">
          <span className="welcome-text">WELCOME TO SSZONE Technology</span>
          <span className="hero-text">
            {" "}
            <h1 className="hero-title">
              Empowering Your Dreams with Our Courses
            </h1>
          </span>
          <span className="sl-text">
            Join thousands of learners and achieve success with our expert-led
            online courses. Learn at your own pace and build valuable skills to
            boost your career.
          </span>
          <button className="enroll-btn">Enroll Now</button>
        </div>
        <div className="hero-sec2">
          <img src="hero_G.png"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
