import React from "react";
import { Helmet } from "react-helmet";

import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";

import "./contact.css";
import ContactForm3 from "../components/contact-form3";
import Contact10 from "../components/contact10";

const Contact = (props) => {
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
      <Navbar81 />
      <ContactForm3></ContactForm3>
      <Contact10></Contact10>
      <Footer31 />
    </div>
  );
};

export default Contact;
