import Footer from "./Homepage/Footer";
import Navbar from "./Homepage/Navbar";
import PopularCourses from "./Homepage/PopularCourses";

const Wishlist = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src="Wishlist.png"></img>
      </div>
      <PopularCourses />
      <Footer />
    </>
  );
};
export default Wishlist;
