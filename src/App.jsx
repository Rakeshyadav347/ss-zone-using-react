import "./App.css";
import Navbar from "./components/Homepage/Navbar";
import HeroSection from "./components/Homepage/HeroSection";
import AllLog from "./components/LoginComp/AllLog";
import FeatCompany from "./components/Homepage/FeatCompany";
import PopularCourses from "./components/Homepage/PopularCourses";
import AboutCompany from "./components/Homepage/AboutCompany";
import Blogs from "./components/Homepage/Blogs";
import Testimonials from "./components/Homepage/Testimonials";
import Faq from "./components/Homepage/Faq";
import Footer from "./components/Homepage/Footer";
import AllSignup from "./components/SignUp/AllSignup";
import Course_Page from "./components/Course_page/Course_Page";
import Course_Overview from "./components/Course_page/Course_Overview";
import Course_Curriculum from "./components/Course_page/Course_Curriculum";
import Course_instructor from "./components/Course_page/Course_instructor";
import Course_Review from "./components/Course_page/Course-Review";
import AboutUS from "./components/AboutUs";
import ContactUspage from "./components/ContactUspage";
import Wishlist from "./components/Wishlist";
import AllBlog from "./components/AllBlog";
import Blogdetail from "./components/Blogdetail";
import Shopcart from "./components/Shopcart";
import BillingDetails from "./components/BillingDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <FeatCompany />
              <PopularCourses />
              <AboutCompany />
              <Blogs />
              <Testimonials />
              <Faq />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<AllLog />} />
        <Route path="/signup" element={<AllSignup />} />
        <Route path="/coursepage" element={<Course_Page />} />
        <Route path="/courseoverview" element={<Course_Overview />} />
        <Route path="/coursecurriculum" element={<Course_Curriculum />} />
        <Route path="/courseinstructor" element={<Course_instructor />} />
        <Route path="/coursereview" element={<Course_Review />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/contactus" element={<ContactUspage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/allblog" element={<AllBlog />} />
        <Route path="/blogdetail" element={<Blogdetail />} />
        <Route path="/shopcart" element={<Shopcart />} />
        <Route path="/billingdetails" element={<BillingDetails />} />
      </Routes>
    </>
  );
}

export default App;
