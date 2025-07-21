import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button, Modal, Box } from "@mui/material";
import { Fade } from "@mui/material";
import "./HeroCarousel.css";

const items = [
  {
    name: "Artificial Intelligence",
    description: "You can do more with AI.",
    image: "/images/basket.jpg",
    popupText: "Découvrez comment l'IA révolutionne votre quotidien.",
  },
  {
    name: "Productivity",
    description: "Enhance your productivity.",
    image: "/images/astrology.jpg",
    popupText: "Boostez votre productivité grâce à nos solutions innovantes.",
  },
  {
    name: "Product",
    description: "Launching Apple Vision Pro.",
    image: "/images/argicole.jpg",
    popupText: "bla bla",
  },
  {
    name: "Product",
    description: "Launching Apple Vision Pro.",
    image: "/images/argicole.jpg",
    popupText: "Découvrez comment l'IA révolutionne votre quotidien.",
  },
  {
    name: "Product",
    description: "Launching Apple Vision Pro.",
    image: "/images/argicole.jpg",
    popupText: "Découvrez comment l'IA révolutionne votre quotidien.",
  },
  {
    name: "Product",
    description: "Launching Apple Vision Pro.",
    image: "/images/argicole.jpg",
    popupText: "Découvrez comment l'IA révolutionne votre quotidien.",
  },
  {
    name: "Product",
    description: "Launching Apple Vision Pro.",
    image: "/images/argicole.jpg",
    popupText: "Découvrez comment l'IA révolutionne votre quotidien.",
  },
  {
    name: "Product",
    description: "Launching Apple Vision Pro.",
    image: "/images/argicole.jpg",
    popupText: "Découvrez comment l'IA révolutionne votre quotidien.",
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

function HeroCarousel() {
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
        <h2 className="side-title">Notre Mission</h2>
        <p className="side-desc">
          Nous développons des solutions technologiques avancées pour optimiser
          les performances des machines agricoles, en intégrant des systèmes
          intelligents pour une agriculture plus précise et efficace.
        </p>
        <Button
          variant="contained"
          color="primary"
          className="side-btn"
          size="large"
          onClick={() => setAboutModalOpen(true)}
          aria-label="Ouvrir la fenêtre à propos"
        >
          À propos
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
                    Fermer
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
        className="carousel-modal"
        aria-labelledby="about-modal-title"
        aria-describedby="about-modal-description"
        closeAfterTransition
      >
        <Fade in={aboutModalOpen} timeout={400}>
          <Box
            className="carousel-modal-box about-modal-anim"
            sx={{ position: "relative" }}
          >
            <div className="about-modal-content-horizontal">
              {/* Header centré */}
              <div className="about-modal-profile-col">
                <div className="about-modal-profile">
                  <img
                    src="/images/lamiaCarteron.jpeg"
                    alt="Portrait de Lamia Carteron"
                    className="about-modal-img"
                  />
                  <div className="about-modal-name">Lamia Carteron</div>
                  <div className="about-modal-post">Fondatrice</div>
                </div>
              </div>
              {/* Texte à gauche même sur mobile */}
              <div id="about-modal-description" className="about-modal-desc">
                <section>
                  <h2 className="about-modal-title" id="about-modal-title">
                    Carteron Industries
                  </h2>
                  <strong>Parcours&nbsp;:</strong>
                  <br />
                  Ingénieure en technologies agricoles, Lamia Carteron a fondé
                  Carteron Industries après 10 ans d’expérience dans
                  l’optimisation des systèmes pour machines agricoles, avec une
                  passion pour l’innovation et l’accompagnement des acteurs du
                  secteur.
                </section>
                <section>
                  <strong>Mission&nbsp;:</strong>
                  <br />
                  Offrir des solutions intelligentes pour moderniser
                  l’agriculture, améliorer les rendements, réduire l’impact
                  environnemental et accompagner les agriculteurs dans leur
                  transformation digitale.
                </section>
                <section>
                  <strong>Équipe&nbsp;:</strong>
                  <br />
                  Notre équipe pluridisciplinaire regroupe ingénieurs,
                  développeurs et experts terrain, tous animés par la volonté de
                  faire évoluer l’agriculture grâce à la technologie.
                </section>
              </div>
              <div className="carousel-modal-actions">
                <Button
                  onClick={() => setAboutModalOpen(false)}
                  variant="contained"
                  color="primary"
                  className="carousel-modal-close"
                  aria-label="Fermer la fenêtre à propos"
                >
                  Fermer
                </Button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default HeroCarousel;
