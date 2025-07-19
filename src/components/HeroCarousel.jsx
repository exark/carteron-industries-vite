import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button, Modal, Box } from "@mui/material";
import { Fade } from "@mui/material";
import "./HeroCarousel.css";

const items = [
  {
    name: "Artificial Intelligence",
    description: "You can do more with AI.",
    image: "images/basket.jpg",
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
    image: "images/argicole.jpg",
    popupText: "bla bla",
  },
  {
    name: "Product",
    description: "Launching Apple Vision Pro.",
    image: "images/argicole.jpg",
    popupText: "Découvrez comment l'IA révolutionne votre quotidien.",
  },
  {
    name: "Product",
    description: "Launching Apple Vision Pro.",
    image: "images/argicole.jpg",
    popupText: "Découvrez comment l'IA révolutionne votre quotidien.",
  },
  {
    name: "Product",
    description: "Launching Apple Vision Pro.",
    image: "images/argicole.jpg",
    popupText: "Découvrez comment l'IA révolutionne votre quotidien.",
  },
  {
    name: "Product",
    description: "Launching Apple Vision Pro.",
    image: "images/argicole.jpg",
    popupText: "Découvrez comment l'IA révolutionne votre quotidien.",
  },
  {
    name: "Product",
    description: "Launching Apple Vision Pro.",
    image: "images/argicole.jpg",
    popupText: "Découvrez comment l'IA révolutionne votre quotidien.",
  },
  // Ajoute d'autres slides si tu veux
];

function HeroCarousel() {
  const [swiper, setSwiper] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);
  const [centered, setCentered] = useState(window.innerWidth <= 600);

  useEffect(() => {
    if (!swiper) return;

    const realignSwiper = () => {
      if (swiper && swiper.slideTo) {
        swiper.update();
        swiper.slideTo(swiper.activeIndex, 0, false);
      }
    };

    swiper.on("slideChangeTransitionEnd", realignSwiper);
    swiper.on("resize", realignSwiper);
    swiper.on("navigationNext", realignSwiper);
    swiper.on("navigationPrev", realignSwiper);

    return () => {
      swiper.off("slideChangeTransitionEnd", realignSwiper);
      swiper.off("resize", realignSwiper);
      swiper.off("navigationNext", realignSwiper);
      swiper.off("navigationPrev", realignSwiper);
    };
  }, [swiper]);

  const handleSlideClick = (item, idx) => {
    if (swiper) {
      if (swiper.realIndex === idx) {
        swiper.slideNext(350);
      } else {
        swiper.slideToLoop(idx, 350);
      }
    }
    setActiveSlide({ ...item });
    setModalOpen(true);
  };

  const [aboutModalOpen, setAboutModalOpen] = useState(false);

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
        >
          &lt;
        </div>
        <div className="hero-carousel-swiper-container">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={8}
            slidesPerView={3}
            centeredSlides={centered}
            navigation={{
              prevEl: ".custom-prev-btn",
              nextEl: ".custom-next-btn",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }} // ← 4 secondes
            loop={true}
            onSwiper={setSwiper}
            className="hero-swiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="hero-carousel-slide"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    cursor: "pointer",
                  }}
                  onClick={() => handleSlideClick(item, idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    handleSlideClick(item, idx)
                  }
                >
                  <div className="hero-carousel-header-overlay">
                    <div className="hero-carousel-title">{item.name}</div>
                    <div className="hero-carousel-desc">{item.description}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="custom-next-btn hero-nav-btn"
          tabIndex={0}
          role="button"
          aria-label="Suivant"
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
