import Footer from "../Homepage/Footer";
import Navbar from "../Homepage/Navbar";
import PopularCourses from "../Homepage/PopularCourses";

const Course_Page = () => {
  return (
    <>
      <Navbar />
      <div className="cp-image">
        <img className="cp-image" src="Courses.png"></img>
        <PopularCourses />
        <Footer />
      </div>
    </>
  );
};
export default Course_Page;
