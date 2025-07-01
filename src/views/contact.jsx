import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar81 from '../components/navbar81'
import ContactForm3 from '../components/contact-form3'
import Contact10 from '../components/contact10'
import Footer31 from '../components/footer31'
import './contact.css'

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
      <Navbar81
        link1={
          <Fragment>
            <span className="contact-text10">Nos Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">Prop Content</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">Témoignage</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">Autres</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15">Agricultural Machinery</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16">Baby Strollers</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17">Golf Gear</span>
          </Fragment>
        }
        link31={
          <Fragment>
            <span className="contact-text18">FAQ</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text19">Accueil</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text20">Contactez nous</span>
          </Fragment>
        }
        logoSrc="/modern%20logo%20blending%20wheat%20stalks%20with%20technology%20elements%20(1)-1500h.png"
        page1Description={
          <Fragment>
            <span className="contact-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text24">Page Four Description</span>
          </Fragment>
        }
      ></Navbar81>
      <div className="contact-container2">
        <ContactForm3
          action={
            <Fragment>
              <span className="contact-text25">Submit</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text26">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-text27">Get in touch with us</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text28">Contact us</span>
            </Fragment>
          }
        ></ContactForm3>
        <Contact10
          content1={
            <Fragment>
              <span className="contact-text29">
                Feel free to reach out for inquiries or collaborations.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text30">Get in Touch</span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="contact-text31">
                Address: 123 Smart Tech Street, City, Country
              </span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="contact-text32">
                Email: info@smarttechengineer.com
              </span>
            </Fragment>
          }
          contact10Id="Contact10"
          rootClassName="contact10root-class-name1"
          location1Description={
            <Fragment>
              <span className="contact-text33">
                Visit us at our main office location.
              </span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="contact-text34">
                Send us an email for any questions or proposals.
              </span>
            </Fragment>
          }
        ></Contact10>
      </div>
      <Footer31
        link1={
          <Fragment>
            <span className="contact-text35">Prop Content</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text36">Prop Content</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text37">Prop Content</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text38">Prop Content</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact-text39">Prop Content</span>
          </Fragment>
        }
        logoSrc="/modern%20logo%20blending%20wheat%20stalks%20with%20technology%20elements%20(1)-1500h.png"
        termsLink={
          <Fragment>
            <span className="contact-text40">Prop Content</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text41">Prop Content</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text42">Prop Content</span>
          </Fragment>
        }
      ></Footer31>
    </div>
  )
}

export default Contact
