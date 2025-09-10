import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button, Modal, Box } from "@mui/material";
import { Fade } from "@mui/material";
import "./HeroCarousel.css";
import { useTranslation } from "react-i18next";

const itemsData = [
  {
    key: "innovation",
    image: "/images/chariot.jpg",
  },
  {
    key: "startup",
    image: "/images/separee.webp",
  },
  {
    key: "work",
    image: "/images/application.png",
  },
  {
    key: "tech",
    image: "/images/Prototype.webp",
  },
];

function getSlidesToShow() {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 950) return 2;
  if (window.innerWidth < 1300) return 2;
  return 3;
}

function getSlideWidth() {
  const width = window.innerWidth;
  if (width < 600) return "calc(100% - 4px)";
  if (width < 950) return "calc(50% - 6px)";
  if (width < 1300) return "calc(50% - 9px)";
  return "calc(33.333% - 12px)";
}

function getSlideHeight() {
  const width = window.innerWidth;
  if (width < 600) return "240px";
  if (width < 900) return "320px";
  if (width < 1200) return "400px";
  return "450px";
}

function getSlideTitleSize() {
  const width = window.innerWidth;
  if (width < 600) return "1.2rem";
  if (width < 900) return "1.4rem";
  if (width < 1200) return "1.6rem";
  return "1.45rem";
}

function getSlideDescSize() {
  const width = window.innerWidth;
  if (width < 600) return "0.8rem";
  if (width < 900) return "0.9rem";
  if (width < 1200) return "1rem";
  return "1.13rem";
}

export default function HeroCarousel() {
  const { t } = useTranslation();
  const items = itemsData.map(item => ({
    ...item,
    name: t(`carousel.${item.key}.name`),
    description: t(`carousel.${item.key}.desc`),
    popupText: t(`carousel.${item.key}.popup`),
  }));
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  // Slides per view responsive
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const [slideWidth, setSlideWidth] = useState(getSlideWidth());
  const [slideHeight, setSlideHeight] = useState(getSlideHeight());
  const [slideTitleSize, setSlideTitleSize] = useState(getSlideTitleSize());
  const [slideDescSize, setSlideDescSize] = useState(getSlideDescSize());
  useEffect(() => {
    const onResize = () => {
      setSlidesToShow(getSlidesToShow());
      setSlideWidth(getSlideWidth());
      setSlideHeight(getSlideHeight());
      setSlideTitleSize(getSlideTitleSize());
      setSlideDescSize(getSlideDescSize());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Embla setup
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      align: "start",
      dragFree: false,
    },
    [autoplay.current]
  );

  // Navigation
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  // Keyboard accessibility for arrows
  const onArrowKeyDown = (cb) => (e) => {
    if (e.key === "Enter" || e.key === " ") cb();
  };

  const handleSlideClick = (item) => {
    setActiveSlide({ ...item });
    setModalOpen(true);
  };

  const handleAboutOpen = () => {
    setAboutModalOpen(true);
  };

  const handleAboutClose = () => {
    setAboutModalOpen(false);
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && aboutModalOpen) {
        handleAboutClose();
      }
    };

    if (aboutModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [aboutModalOpen]);

  return (
    <div className="hero-carousel-wrapper">
      <div className="hero-carousel-side-content">
        <h2 className="side-title">{t('carousel.side_title', 'Notre Mission')}</h2>
        <p className="side-desc">
          {t('carousel.side_desc', 'Nous développons des solutions technologiques avancées pour optimiser les performances des machines agricoles, en intégrant des systèmes intelligents pour une agriculture plus précise et efficace.')}
        </p>
        <button
          className="meet-founder-btn"
          onClick={handleAboutOpen}
          aria-controls="founder-modal"
          aria-expanded={aboutModalOpen}
          aria-label={t('carousel.about_aria')}
        >
          {t('carousel.meet_founder_btn', 'Meet the Founder')}
        </button>
      </div>
      <div className="hero-carousel-nav-outer">
        <div
          className="custom-prev-btn hero-nav-btn"
          tabIndex={0}
          role="button"
          aria-label="Précédent"
          onClick={scrollPrev}
          onKeyDown={onArrowKeyDown(scrollPrev)}
        >
          &lt;
        </div>
        <div className="hero-carousel-swiper-container">
          <div
            className="embla"
            ref={emblaRef}
            style={{ width: "100%" }}
          >
            <div className="embla__container" style={{ display: "flex" }}>
              {items.slice(0, 6).map((item, idx) => (
                <div
                  className="embla__slide"
                  key={idx}
                  style={{
                    width: slideWidth,
                  }}
                  tabIndex={0}
                  role="button"
                  onClick={() => handleSlideClick(item)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    handleSlideClick(item)
                  }
                >
                  <div
                    className="hero-carousel-slide"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "22px",
                      height: slideHeight,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    {/* Titre en haut */}
                    <div
                      style={{
                        width: "100%",
                        padding: "26px 22px 12px 22px",
                        borderRadius: "22px 22px 0 0",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: slideTitleSize,
                        textShadow: "0 2px 14px rgba(0,0,0,0.38)",
                        background: "rgba(0,0,0,0.35)",
                      }}
                    >
                      {item.name}
                    </div>
                    {/* Description centrée verticalement */}
                    <div
                      style={{
                        color: "#fff",
                        fontSize: slideDescSize,
                        margin: "auto 0 30px 0",
                        padding: "12px 18px",
                        borderRadius: "10px",
                        background: "rgba(0,0,0,0.28)",
                        textShadow: "0 2px 8px rgba(0,0,0,0.25)",
                        textAlign: "center",
                      }}
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="custom-next-btn hero-nav-btn"
          tabIndex={0}
          role="button"
          aria-label="Suivant"
          onClick={scrollNext}
          onKeyDown={onArrowKeyDown(scrollNext)}
        >
          &gt;
        </div>
      </div>

      {/* ----- MODAL POPUP pour les carousel ----- */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="carousel-modal-title"
        aria-describedby="carousel-modal-desc"
        className="carousel-modal"
      >
        <Box className="carousel-modal-box" sx={{ position: "relative" }}>
          {/* Croix de fermeture */}
          <button
            onClick={() => setModalOpen(false)}
            className="about-modal-close-x"
            aria-label="Fermer la fenêtre"
          >
            ×
          </button>
          
          {activeSlide && (
            <div className="carousel-modal-content">
              <h2 className="carousel-modal-title">{activeSlide.name}</h2>
              <div className="carousel-modal-desc">
                {activeSlide.popupText}
              </div>
            </div>
          )}
        </Box>
      </Modal>
      {/* ----- FOUNDER MODAL ----- */}
      {aboutModalOpen && (
        <div 
          className="founder-modal-backdrop"
          onClick={handleAboutClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="founder-modal-title"
          id="founder-modal"
        >
          <div 
            className="founder-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleAboutClose}
              className="founder-modal-close"
              aria-label={t('carousel.close', 'Close')}
            >
              ✕
            </button>
            
            <div className="founder-modal-header">
              <img
                src="/images/Lamia Carteron.jpg"
                alt="Lamia Carteron"
                className="founder-avatar"
              />
              <div className="founder-info">
                <h2 id="founder-modal-title" className="founder-title">
                  Lamia Carteron — {t('carousel.about_founder', 'Founder')}
                </h2>
                <p className="founder-tagline">
                  <span className="mobile-tagline">Engineering innovation for golf & family</span>
                  <span className="desktop-tagline">Bridging automotive engineering excellence with family-centered golf innovation</span>
                </p>
              </div>
            </div>

            <div className="founder-modal-body">
              <section className="founder-section">
                <h3 className="section-title">Vision</h3>
                <p className="section-content">
                  Making golf more accessible and enjoyable for families through innovative technology that combines performance with practicality.
                </p>
              </section>

              <section className="founder-section">
                <h3 className="section-title">Background</h3>
                <div className="section-content">
                  <ul className="background-list">
                    <li>PhD in Electronics & Physics</li>
                    <li>15+ years in automotive R&D</li>
                    <li>Expert in electric & hybrid vehicle optimization</li>
                    <li>Collaborated with major automotive & agricultural brands</li>
                  </ul>
                </div>
              </section>

              <section className="founder-section">
                <h3 className="section-title">Today</h3>
                <p className="section-content">
                  Combining passion for engineering, golf, and family life to create the revolutionary 2-in-1 electric golf stroller that transforms how parents experience the game.
                </p>
              </section>
            </div>

            <div className="founder-modal-footer">
              <button className="secondary-cta-btn">
                Discover the 2-in-1 Electric Golf Stroller
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
