import React from "react";
import { Helmet } from "react-helmet";

import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";
import FAQ9 from "../components/faq9";

import "./faq.css";

const FAQ = () => {
  return (
    <div className="faq-container1">
      <Helmet>
        <title>FAQ - Carteron Industries</title>
        <meta property="og:title" content="FAQ - Carteron Industries" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5538c453-0d0c-4da8-bbdf-7b23b6da0b32/3ff3de69-2ab4-4793-ac76-839bc4f6bbca?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Navbar81 />
      <FAQ9 />
      <Footer31 />
    </div>
  );
};

export default FAQ;
