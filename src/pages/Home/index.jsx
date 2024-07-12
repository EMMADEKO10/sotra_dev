import React, { lazy, Suspense } from 'react';
import HeaderTop from "../../components/home/HeaderTop"
import NavBar from "../../components/Navbars/NavBar"
import Banner from "../../components/home/Banner"
import RetourEnHaut from "../../components/bouton/RetourEnHaut"
import SponsorCarousel from "../../components/home/SponsorCarousel"
import SocialBondsSection from "../../components/home/SocialBondsSection"
import FAQ from "../../components/home/FAQ"
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader"

// Lazy load components
const HomeSponsortClassement = lazy(() =>
  import("../../components/home/HomeSponsortClassement")
)
const AboutArea = lazy(() => import("../../components/home/AboutArea"))
const Activity = lazy(() => import("../../components/home/Activity"))
const OurMission = lazy(() => import("../../components/home/OurMission"))
const Causes = lazy(() => import("../../components/home/Causes"))
const Volunteer = lazy(() => import("../../components/home/Volunteer"))
const EventArea = lazy(() => import("../../components/home/EventArea"))
const Testimonials = lazy(() => import("../../components/home/Testimonials"))
const GalleryArea = lazy(() => import("../../components/home/GalleryArea"))
const Blog = lazy(() => import("../../components/home/Blog"))
const Footer = lazy(() => import("../../components/Footer"));

function Home() {
  return (
    <>
      <HeaderTop />
      <NavBar />
      <main>
        <Banner />
        <Suspense fallback={<SkeletonLoader />}>
          <AboutArea />
          <Causes />
          <Activity />
          <OurMission />
          <div className='py-20'>
            <SponsorCarousel />
            <Volunteer />
          </div>
          <SocialBondsSection />
          <Testimonials />
          <FAQ />
          <GalleryArea />
          <EventArea />
          <Blog />
        </Suspense>
      </main>
      <RetourEnHaut />
      <Suspense fallback={<SkeletonLoader />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;