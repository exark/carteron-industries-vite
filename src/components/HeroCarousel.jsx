import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button, Modal, Box } from "@mui/material";
import { Fade } from "@mui/material";
import "./HeroCarousel.css";
import { useTranslation } from "react-i18next";

const itemsData = [
  {
    key: "ai",
    image: "/images/basket.jpg",
  },
  {
    key: "astrology",
    image: "/images/astrology.jpg",
  },
  {
    key: "innovation",
    image: "/images/tracteur1.png",
  },
  {
    key: "startup",
    image: "/images/startup.jpg",
  },
  {
    key: "work",
    image: "/images/workhard.jpg",
  },
  {
    key: "tech",
    image: "/images/macbookpro.jpg",
  },
  {
    key: "nature",
    image: "/images/fleur.jpg",
  },
  {
    key: "project",
    image: "/images/projet.jpg",
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

  return (
    <div className="hero-carousel-wrapper">
      <div className="hero-carousel-side-content">
        <h2 className="side-title">{t('carousel.side_title', 'Notre Mission')}</h2>
        <p className="side-desc">
          {t('carousel.side_desc', 'Nous développons des solutions technologiques avancées pour optimiser les performances des machines agricoles, en intégrant des systèmes intelligents pour une agriculture plus précise et efficace.')}
        </p>
        <Button
          variant="contained"
          color="primary"
          className="side-btn"
          size="large"
          onClick={() => setAboutModalOpen(true)}
          aria-label={t('carousel.about_aria', 'Ouvrir la fenêtre à propos')}
        >
          {t('carousel.about_btn', 'À propos')}
        </Button>
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
        <Box className="carousel-modal-box">
          {activeSlide && (
            <>
              <img
                src={activeSlide.image}
                alt={activeSlide.name}
                className="carousel-modal-img"
              />
              <div className="carousel-modal-content">
                <h2 className="carousel-modal-title">{activeSlide.name}</h2>
                <div className="carousel-modal-desc">
                  {activeSlide.popupText}
                </div>
                <div className="carousel-modal-actions">
                  <Button
                    onClick={() => setModalOpen(false)}
                    variant="contained"
                    color="primary"
                    className="carousel-modal-close"
                  >
                    {t('carousel.close', 'Fermer')}
                  </Button>
                </div>
              </div>
            </>
          )}
        </Box>
      </Modal>
      {/* ----- MODAL POPUP à propos de nous ----- */}
      <Modal
        open={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        className="carousel-modal about-modal-light"
        aria-labelledby="about-modal-title"
        aria-describedby="about-modal-description"
        closeAfterTransition
      >
        <Fade in={aboutModalOpen} timeout={400}>
          <Box
            className="carousel-modal-box about-modal-light-box"
            sx={{ position: "relative", padding: 0, overflow: "hidden" }}
          >
            {/* Croix de fermeture */}
            <button
              onClick={() => setAboutModalOpen(false)}
              className="about-modal-close-x"
              aria-label="Fermer la fenêtre à propos"
            >
              ×
            </button>
            
            <div className="about-modal-light-content">
              {/* Colonne gauche - Avatar et infos */}
              <div className="about-modal-light-left-col">
                <div className="about-modal-light-avatar-block">
                  <img
                    src="/images/lamiaCarteron.jpeg"
                    alt="Portrait de Lamia Carteron"
                    className="about-modal-light-avatar-img"
                  />
                  <div className="about-modal-light-name">Lamia Carteron</div>
                  <div className="about-modal-light-post">Fondatrice</div>
                </div>
              </div>
              
              {/* Colonne droite - Contenu */}
              <div className="about-modal-light-right-col">
                {/* Introduction et Parcours */}
                <div className="about-modal-light-sections">
                  <section className="about-modal-light-section">
                    <div className="about-modal-light-section-desc">
                      {t('carousel.about_intro', 'Carteron Industries, c\'est une vision moderne de l\'agriculture et de la mobilité. Fondée sur une expertise en ingénierie système, l\'entreprise développe des solutions intelligentes pour le monde agricole et les loisirs outdoor. Nous croyons en une technologie utile, durable et adaptée aux réalités du terrain.')}
                    </div>
                  </section>
                  <section className="about-modal-light-section">
                    <div className="about-modal-light-section-title">Parcours</div>
                    <div className="about-modal-light-section-desc">
                      {t('carousel.about_parcours', 'Docteure ingénieure en électronique et physique, Lamia Carteron fonde Carteron Industries après plus de 15 ans d\'expérience en R&D dans l\'optimisation de véhicules thermiques, hybrides, électriques et de machines agricoles. Elle a collaboré avec de grands noms de l\'industrie automobile et du secteur agricole. Aujourd\'hui, elle met son expertise au service d\'une solution innovante dans le domaine du loisir, fruit d\'un croisement unique entre sa passion pour l\'ingénierie automobile, son goût pour le golf et sa vie de famille.')}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
