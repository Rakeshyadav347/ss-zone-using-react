const LoggedSec = () => {
  return (
    <>
      <div className="signup-sec">
        <button type="button" className="signup-btn">
          Log in
        </button>
        <div className="al-logged">
          <span className="al-text">Don't have an account?</span>
          <a className="al-log" href="#">
            Create an account.
          </a>
        </div>
      </div>
      <div className="terms">
        <input className="ch-box" type="checkbox" id="check" name="term" />
        <span className="terms-text">
          By clicking 'Sign up', you acknowledge that you have read and accept
          the <a href="#">Terms of Services</a> and
          <a href="#"> Privacy Policy</a>
        </span>
      </div>
    </>
  );
};
export default LoggedSec;
