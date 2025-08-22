const InputSignup = () => {
  return (
    <>
      <div className="in_feilds">
        <span className="input-title">Username</span>
        <input
          type="text"
          className="input-field"
          placeholder="Enter your username"
        />
      </div>
      <div className="in_feilds">
        <span className="input-title">Password</span>
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
