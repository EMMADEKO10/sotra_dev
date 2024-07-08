import React, { lazy, Suspense } from 'react';
import HeaderTop from "../../components/HeaderTop";
import NavBar from "../../components/Navbars/NavBar";
import Banner from "../../components/Banner";
import RetourEnHaut from "../../components/bouton/RetourEnHaut";
import SponsorCarousel from '../../components/SponsorCarousel';
import SocialBondsSection from '../../components/SocialBondsSection';
import FAQ from '../../components/FAQ';

// Lazy load components
const HomeSponsortClassement = lazy(() => import("../../components/HomeSponsortClassement"));
const AboutArea = lazy(() => import("../../components/AboutArea"));
const Activity = lazy(() => import("../../components/Activity"));
const OurMission = lazy(() => import("../../components/OurMission"));
const Causes = lazy(() => import("../../components/Causes"));
const Volunteer = lazy(() => import("../../components/Volunteer"));
const EventArea = lazy(() => import("../../components/EventArea"));
const Testimonials = lazy(() => import("../../components/Testimonials"));
const GalleryArea = lazy(() => import("../../components/GalleryArea"));
const Blog = lazy(() => import("../../components/Blog"));
const Footer = lazy(() => import("../../components/Footer"));

function Home() {
  return (
    <>
      <HeaderTop />
      <NavBar />
      <main>
        <Banner />
        <Suspense fallback={<div>Chargement...</div>}>
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
      <Suspense fallback={<div>Chargement...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;