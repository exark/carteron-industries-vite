import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";

import Navbar81 from "../components/navbar81";
import Features25 from "../components/features25";
import Steps2 from "../components/steps2";
import Testimonial17 from "../components/testimonial17";
import FAQ9 from "../components/faq9";
import Contact10 from "../components/contact10";
import Footer31 from "../components/footer31";
import { useLocation, useNavigate } from "react-router-dom";

import "./home.css";
import HeroCarousel from "../components/HeroCarousel";

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
    <div className="home-container1">
      <Helmet>
        <title>Carteron Industries</title>
        <meta property="og:title" content="Carteron Industries" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5538c453-0d0c-4da8-bbdf-7b23b6da0b32/3ff3de69-2ab4-4793-ac76-839bc4f6bbca?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      {/* All your sections stay as-is */}
      <Navbar81></Navbar81>
      <HeroCarousel></HeroCarousel>

      <div id="our-product" className="home-services">
        <Features25></Features25>
      </div>
      <div id="accompagnement">
        <Steps2></Steps2>
      </div>
      {/*
      <div id="temoignages">
        <Testimonial17></Testimonial17>
      </div>
      */}
      <div id="faq">
        <FAQ9></FAQ9>
      </div>
        <Contact10></Contact10>
      <Footer31></Footer31>
    </div>
  );
};

export default Home;
