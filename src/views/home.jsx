import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import Navbar81 from '../components/navbar81'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import FAQ9 from '../components/faq9'
import Contact10 from '../components/contact10'
import Footer31 from '../components/footer31'

import './home.css'

const Home = () => {
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
            <Navbar81
                link1={
                    <Fragment>
                        <span href="#Nos-Services" className="home-text10">Nos Services</span>
                    </Fragment>
                }
                link3={
                    <Fragment>
                        <span href="#temoignage" className="home-text10">témoignage</span>
                    </Fragment>
                }
                link4={
                    <Fragment>
                        <span className="home-text13">Autres</span>
                    </Fragment>
                }
                page1={
                    <Fragment>
                        <span className="home-text14">à faire</span>
                    </Fragment>
                }
                page2={
                    <Fragment>
                        <span className="home-text15">Agricultural Machinery</span>
                    </Fragment>
                }
                page3={
                    <Fragment>
                        <span className="home-text16">Baby Strollers</span>
                    </Fragment>
                }
                page4={
                    <Fragment>
                        <span className="home-text17">Golf Gear</span>
                    </Fragment>
                }
                link31={
                    <Fragment>
                        <span className="home-text18">FAQ</span>
                    </Fragment>
                }
                action1={
                    <Fragment>
                        <span className="home-text19">Accueil</span>
                    </Fragment>
                }
                action2={
                    <Fragment>
                        <span className="home-text20">Contactez nous</span>
                    </Fragment>
                }
                logoSrc="/modern%20logo%20blending%20wheat%20stalks%20with%20technology%20elements%20(1)-1500h.png"
                link1Url="#Features24"
                link3Url="#Testimonial17"
                link3Url1="#FAQ9"
                page1Description={
                    <Fragment>
                        <span className="home-text21">test1</span>
                    </Fragment>
                }
                page2Description={
                    <Fragment>
                        <span className="home-text22">test2</span>
                    </Fragment>
                }
                page3Description={
                    <Fragment>
                        <span className="home-text23">Page Three Description</span>
                    </Fragment>
                }
                page4Description={
                    <Fragment>
                        <span className="home-text24">Page Four Description</span>
                    </Fragment>
                }
            ></Navbar81>
            <Hero17
                action1={
                    <Fragment>
                        <span className="home-text25">Learn More</span>
                    </Fragment>
                }
                action2={
                    <Fragment>
                        <span className="home-text26">Contact Us</span>
                    </Fragment>
                }
                content1={
                    <Fragment>
                        <span className="home-text27">
                            Nous développons des solutions technologiques avancées pour
                            optimiser les performances des machines agricoles, en intégrant
                            des systèmes intelligents pour une agriculture plus précise et
                            efficace.
                        </span>
                    </Fragment>
                }
                heading1={
                    <Fragment>
                        <span className="home-text28">Carteron Industries</span>
                    </Fragment>
                }
            ></Hero17>
            <div id="Nos-services" className="home-services">
                <Features24
                    features24Id="Features24"
                    feature1Title={
                        <Fragment>
                            <span className="home-text29">Smart Agricultural Machinery</span>
                        </Fragment>
                    }
                    feature2Title={
                        <Fragment>
                            <span className="home-text30">Smart Baby Strollers</span>
                        </Fragment>
                    }
                    feature3Title={
                        <Fragment>
                            <span className="home-text31">Golf Gear</span>
                        </Fragment>
                    }
                    feature1Description={
                        <Fragment>
                            <span className="home-text32">
                                Optimize your agricultural processes with cutting-edge smart
                                technology.
                            </span>
                        </Fragment>
                    }
                    feature2Description={
                        <Fragment>
                            <span className="home-text33">
                                Ensure the safety and comfort of your little ones with smart
                                baby strollers.
                            </span>
                        </Fragment>
                    }
                    feature3Description={
                        <Fragment>
                            <span className="home-text34">
                                Enhance your golf game with smart tech solutions tailored to
                                your needs.
                            </span>
                        </Fragment>
                    }
                ></Features24>
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
            <div id="temoignage" className="home-temoignage">
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
            <Footer31
                link1={
                    <Fragment>
                        <span className="home-text75">Prop Content</span>
                    </Fragment>
                }
                link2={
                    <Fragment>
                        <span className="home-text76">Prop Content</span>
                    </Fragment>
                }
                link3={
                    <Fragment>
                        <span className="home-text77">Prop Content</span>
                    </Fragment>
                }
                link4={
                    <Fragment>
                        <span className="home-text78">Prop Content</span>
                    </Fragment>
                }
                link5={
                    <Fragment>
                        <span className="home-text79">Prop Content</span>
                    </Fragment>
                }
                logoSrc="/modern%20logo%20blending%20wheat%20stalks%20with%20technology%20elements%20(1)-1500h.png"
                termsLink={
                    <Fragment>
                        <span className="home-text80">Prop Content</span>
                    </Fragment>
                }
                cookiesLink={
                    <Fragment>
                        <span className="home-text81">Prop Content</span>
                    </Fragment>
                }
                privacyLink={
                    <Fragment>
                        <span className="home-text82">Prop Content</span>
                    </Fragment>
                }
            ></Footer31>
        </div>
    )
}

export default Home