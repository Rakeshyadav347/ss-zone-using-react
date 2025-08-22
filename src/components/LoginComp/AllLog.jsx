import Signup from "./Signup";
import InputSignup from "./InputSignup";
import LoggedSec from "./LoggedSec";

const AllLog = () => {
  return (
    <div className="blur">
      <div className="LogIn">
        <form className="forms">
          <div className="with-input-field">
            <div className="header">
              <div className="title">
                <h1 className="wel-text">Welcome Back! Log in continue</h1>
                <h6 className="min-text">Resume your learning journey</h6>
              </div>
              <div className="include-others">
                <div className="signup">
                  <Signup />
                </div>
              </div>
            </div>
            <div className="input-forms">
              <InputSignup />
            </div>
          </div>
          <div className="Checkmark">
            <LoggedSec />
          </div>
        </form>
      </div>
    </div>
  );
};
export default AllLog;
