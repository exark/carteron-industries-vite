import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar81 from "../../components/layout/navbar81";
import Footer31 from "../../components/layout/footer31";

import "./contact.css";
import ContactForm3 from "../../components/sections/contact-form3";
import Contact10 from "../../components/sections/contact10";

const Contact = () => {
  return (
    <div className="contact-container1">
      <Helmet>
        <title>Contact - Carteron industries</title>
        <meta property="og:title" content="Contact - Carteron industries" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5538c453-0d0c-4da8-bbdf-7b23b6da0b32/19a10c86-c4c4-4c1d-a945-c030937c573e?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Navbar81>
        <ContactForm3></ContactForm3>
        <Contact10 hideCta></Contact10>
        <Footer31 />
      </Navbar81>
    </div>
  );
};

export default Contact;
