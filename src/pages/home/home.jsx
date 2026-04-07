import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Navbar81 from "../../components/layout/navbar81";
import Features25 from "../../components/sections/features25";
import TrustedPartners from "../../components/sections/TrustedPartners";
import Testimonial17 from "../../components/sections/testimonial17";
import Contact10 from "../../components/sections/contact10";
import Footer31 from "../../components/layout/footer31";
import { useLocation, useNavigate } from "react-router-dom";

import "./home.css";
import TopHero from "../../components/sections/TopHero";
import FamilyGolfRevolution from "../../components/sections/FamilyGolfRevolution";
import InfoSection from "../../components/sections/InfoSection";
import HeroCarousel from "../../components/sections/HeroCarousel";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.anchorId) {
      const el = document.getElementById(location.state.anchorId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        navigate(location.pathname, { replace: true, state: {} });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location, navigate]);
  return (
    <Fragment>
      <Helmet>
        <title>Carteron Industries</title>
        <meta property="og:title" content="Carteron Industries" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5538c453-0d0c-4da8-bbdf-7b23b6da0b32/3ff3de69-2ab4-4793-ac76-839bc4f6bbca?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      
      {/* Navbar contains both paper-back navigation and main-content structure */}
      <Navbar81 
        homeContent={
          <Fragment>
            <TopHero></TopHero>
            <FamilyGolfRevolution></FamilyGolfRevolution>
            <InfoSection></InfoSection>
            <HeroCarousel></HeroCarousel>

            {/* <div id="our-product" className="home-services">
              <Features25></Features25>
            </div> */}
            <div id="trusted-partners">
              <TrustedPartners></TrustedPartners>
            </div>
            {/*
            <div id="temoignages">
              <Testimonial17></Testimonial17>
            </div>
            */}
            <Contact10></Contact10>
            <Footer31></Footer31>
          </Fragment>
        }
      />
    </Fragment>
  );
};

export default Home;
