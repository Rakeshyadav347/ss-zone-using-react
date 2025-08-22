const InputSignup = () => {
  return (
    <>
      <div className="in_feilds">
        <span className="input-title">Email Address </span>
        <input
          type="text"
          className="input-field"
          placeholder="Enter your Email Address"
        />
      </div>
      <div className="in_feilds">
        <span className="input-title">Password</span>
        <input
          type="password"
          className="input-field"
          placeholder="Enter your password"
        />
      </div>
      <div className="in_feilds">
        <span className="input-title">Confirm Password</span>
        <input
          type="password"
          className="input-field"
          placeholder="Enter your password"
        />
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
      </div>
    </>
  );
};

export default InputSignup;
