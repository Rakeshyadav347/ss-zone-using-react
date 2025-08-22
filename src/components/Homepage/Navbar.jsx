import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar ">
      <ul className="navbar-ul">
        <li className="img">
          <img src="Group 1000002913.png"></img>
        </li>
        <div className="nav-item ">
          <Link className="nav-items ho hideonMobile" to="/">
            Home
          </Link>
          <Link className="nav-items ho hideonMobile" to="/coursepage">
            Courses
          </Link>
          <Link className="nav-items ho hideonMobile" to="/aboutus">
            About us
          </Link>
          <Link className="nav-items ho hideonMobile" to="/contactus">
            Contact us
          </Link>
          <Link className="nav-items ho hideonMobile" to="/allblog">
            Blogs
          </Link>
        </div>
        <Link className="nav-items hideonMobile" to="/wishlist">
          <div className="bookm">
            <FaRegHeart />
          </div>
        </Link>
        <Link className="nav-items hideonMobile" to="/shopcart">
          <div className="bookm">
            <FaCartPlus />
          </div>
        </Link>
        <Link className="nav-items hideonMobile" to="/signup">
          <button>Sign up</button>
        </Link>
        <Link className="nav-items hideonMobile" to="/login">
          <button className="log-btn">Login</button>
        </Link>
      </ul>
    </header>
  );
};
export default Navbar;
