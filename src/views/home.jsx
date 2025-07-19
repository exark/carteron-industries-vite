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
      <section
        style={{
          minHeight: 370,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <HeroCarousel />
      </section>

      
      <div id="Nos-Services" className="home-services">
        <Features25
          features25Id="Features25"
          feature1Title={
            <Fragment>
              <span className="home-text35">
                Smart Agricultural Machinery Solutions
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text36">
                Next-Gen Baby Stroller Designs
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text37">Advanced Golf Gear Technology</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text38">
                Innovative systems engineering solutions tailored for optimizing
                agricultural machinery performance and efficiency.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text39">
                Cutting-edge engineering expertise applied to create safe,
                comfortable, and stylish baby strollers for modern parents.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text40">
                Specialized systems engineering services to enhance the
                performance and design of golf equipment for a superior playing
                experience.
              </span>
            </Fragment>
          }
        ></Features25>
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text41">Consultation</span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text42">Design and Development</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text43">Testing and Implementation</span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text44">Maintenance and Support</span>
            </Fragment>
          }
          rootClassName="steps2root-class-name"
          step1Description={
            <Fragment>
              <span className="home-text45">
                Initial consultation to understand your smart tech needs and
                requirements.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text46">
                Customized design and development of smart tech solutions for
                agricultural machinery, baby strollers, and golf gear.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text47">
                Thorough testing of the systems followed by seamless
                implementation into your existing setup.
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text48">
                Ongoing maintenance and support services to ensure optimal
                performance of the smart tech systems.
              </span>
            </Fragment>
          }
        ></Steps2>
      </div>
      <div id="Testimonial17" className="home-temoignage">
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text49">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text51">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text52">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text53">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text54">Testimonials</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text55">Author Name</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text56">Author Name</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text57">Author Name</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text58">Author Name</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text59">Position, Company name</span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text60">Position, Company name</span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text61">Position, Company name</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text62">Position, Company name</span>
            </Fragment>
          }
          testimonial17Id="Testimonial17"
        ></Testimonial17>
      </div>
      <div className="home-container2">
        <FAQ9
          fAQ9Id="FAQ9"
          content1={
            <Fragment>
              <span className="home-text63">
                Smart Tech Solutions offers smart technology solutions for
                agricultural machinery, baby strollers, and golf gear. They
                provide tailored systems engineering services to optimize
                performance and efficiency.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text64">Frequently Asked Questions</span>
            </Fragment>
          }
          faq1Question={
            <Fragment>
              <span className="home-text65">
                What kind of smart technology solutions does Smart Tech
                Solutions offer?
              </span>
            </Fragment>
          }
          faq2Question={
            <Fragment>
              <span className="home-text66">
                How can I benefit from the systems engineering services provided
                by Smart Tech Solutions?
              </span>
            </Fragment>
          }
          faq3Question={
            <Fragment>
              <span className="home-text67">
                Does Smart Tech Solutions offer maintenance support for their
                solutions?
              </span>
            </Fragment>
          }
          faq4Question={
            <Fragment>
              <span className="home-text68">
                Can Smart Tech Solutions customize solutions for specific needs?
              </span>
            </Fragment>
          }
        ></FAQ9>
      </div>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text69">
              Feel free to reach out for inquiries or collaborations.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text70">Get in Touch</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text71">
              Address: 123 Smart Tech Street, City, Country
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text72">
              Email: info@smarttechengineer.com
            </span>
          </Fragment>
        }
        contact10Id="Contact10"
        rootClassName="contact10root-class-name"
        location1Description={
          <Fragment>
            <span className="home-text73">
              Visit us at our main office location.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text74">
              Send us an email for any questions or proposals.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer31></Footer31>
    </div>
  );
};

export default Home;
