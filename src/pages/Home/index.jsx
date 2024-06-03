
// import './App.css'
import HeaderTop from "../../components/HeaderTop"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import AboutArea from "../../components/AboutArea"
import Activity from "../../components/Activity"
import OurMission from "../../components/OurMission"
import Causes from "../../components/Causes"
import Volunteer from "../../components/Volunteer"
import EventArea from "../../components/EventArea"
import Donnation from "../../components/Donnation"
import Testimonials from "../../components/Testimonials"
import GalleryArea from "../../components/GalleryArea"
import Blog from "../../components/Blog"
import Footer from "../../components/Footer"
import NavBar from "../../components/Navbars/NavBar"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


function Home() {


    return (
        <>
            {/* <!-- Preloader Start --> */}
            <div className="se-pre-con"></div>
            {/* <!-- Preloader Ends --> */}

            <HeaderTop />
            {/* // <!-- Header 
    // ============================================= -->  */}
        <NavBar />
            {/* <Header /> */}

            {/* <!-- End Header -->
      <!-- Start Banner 
    ============================================= --> */}
            <Banner />
            {/* <!-- End Banner -->

      <!-- Star About Area
    ============================================= --> */}
            <AboutArea />
            {/* <!-- End About Area -->
      <!-- Start Causes 
      
    ============================================= --> */}

            <Causes />
            {/* <!-- End Causes -->

            
      <!-- Start What We Do 
    ============================================= --> */}
            <Activity />
            {/* <!-- End What We Do -->

      <!-- Start Our Mission 
    ============================================= --> */}
            <OurMission />
            {/* <!-- End Our Mission -->


      <!-- Start Volunteer 
    ============================================= --> */}
            <Volunteer />
            {/* <!-- End Volunteer -->

      <!-- Start Event Area 
    ============================================= --> */}
            <EventArea />
            {/* <!-- End Event Area --> */}
            {/* 
      <!-- Start Donation 
    ============================================= --> */}
            <Donnation />
            {/* <!-- End Donation Area -->

      <!-- Start Testimonials 
    ============================================= --> */}
            <Testimonials />
            {/* <!-- End Testimonials Area -->

      <!-- Start Gallery 
    ============================================= --> */}
            <GalleryArea />
            {/* <!-- End Gallery Area -->

      <!-- Start Blog 
    ============================================= --> */}
            <Blog />
            {/* <!-- End Blog Area -->

      <!-- Start Footer 
    ============================================= --> */}
            <Footer />
            {/* <!-- End Footer --> */}

        </>
    )
}
export default Home




