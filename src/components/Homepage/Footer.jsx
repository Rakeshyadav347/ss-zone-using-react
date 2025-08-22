const Footer = () => {
  return (
    <div className="footer">
      <div className="f-sec1">
        <span>
          <img src="Logo.png"></img>
        </span>
        <span className="f-des">
          Discover a world of knowledge and opportunities with our online
          education platform pursue a new career.
        </span>
      </div>
      <div className="f-sec2  f-head">
        LINKS
        <ul className="qlink  f-des">
          <li>Home</li>
          <li>Courses</li>
          <li>About us</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="f-sec3">
        <span className="f-head">CONTACT US</span>
        <span className="addre f-des">
          {" "}
          <img src="location_line (1) 1.png"></img>
          <span>GMS Road Dehradun,Uttarakhand,India</span>
        </span>
        <span className="addre-cal f-des">
          {" "}
          <img src="phone_call_line 1.png"></img>
          <span>+91 897 989 1703</span>
        </span>
      </div>
      <div className="f-sec4  f-head">
        <span>
          Social Media
          <span>
            <img className="im-sm" src="Social Media.png"></img>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
