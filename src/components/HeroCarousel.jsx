import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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
  const swiperRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);

  const handleSlideClick = (item, idx) => {
    // Swiper slideTo (0-based)
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(idx, 350); // slideToLoop pour que le loop fonctionne bien
    }
    setActiveSlide({ ...item });
    setModalOpen(true);
  };

  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  

  return (
    <div className="hero-carousel-wrapper">
      <div className="hero-carousel-side-content">
        <h2 className="side-title">Carteron Industries</h2>
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
          À propos de nous
        </Button>
      </div>
      <div className="hero-carousel-root hero-carousel-align-right">
        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={2.5}
          navigation={{
            prevEl: ".custom-prev-btn",
            nextEl: ".custom-next-btn",
          }}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="hero-swiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 2.5 },
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
        <div className="hero-carousel-nav">
          <Button
            className="custom-prev-btn hero-nav-btn"
            variant="contained"
            color="primary"
          >
            &lt;
          </Button>
          <Button
            className="custom-next-btn hero-nav-btn"
            variant="contained"
            color="primary"
          >
            &gt;
          </Button>
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
          <Box className="carousel-modal-box about-modal-anim" sx={{ position: "relative" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                width: "100%",
                gap: 40,
              }}
            >
              {/* Profil à gauche */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: 180,
                }}
              >
                <img
                  src="/images/lamiaCarteron.jpeg"
                  alt="Portrait de Lamia Carteron"
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: "0 2px 8px rgba(80,80,80,0.12)",
                    marginBottom: 16,
                    border: "4px solid #b89d77",
                  }}
                />
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.17rem",
                    marginBottom: 2,
                  }}
                >
                  Lamia Carteron
                </div>
                <div
                  style={{
                    color: "#b89d77",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  Fondatrice
                </div>
              </div>
              {/* Contenu à droite */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2
                  className="carousel-modal-title"
                  id="about-modal-title"
                  style={{
                    textAlign: "left",
                    color: "#b89d77",
                    fontWeight: 800,
                    fontSize: "2.2rem",
                    marginBottom: 28,
                    letterSpacing: ".02em",
                    textShadow: "0 1px 8px rgba(100, 80, 40, 0.07)",
                    borderBottom: "2px solid #e3d7c1",
                    paddingBottom: "8px",
                    width: "fit-content",
                    minWidth: 220,
                  }}
                >
                  Carteron Industries
                </h2>

                <div
                  id="about-modal-description"
                  className="carousel-modal-desc"
                  style={{ textAlign: "left", marginBottom: 44 }}
                >
                  <section style={{ marginBottom: 22 }}>
                    <strong style={{ color: "#73553c" }}>
                      Parcours&nbsp;:
                    </strong>
                    <br />
                    Ingénieure en technologies agricoles, Lamia Carteron a fondé
                    Carteron Industries après 10 ans d’expérience dans
                    l’optimisation des systèmes pour machines agricoles, avec
                    une passion pour l’innovation et l’accompagnement des
                    acteurs du secteur.
                  </section>
                  <section style={{ marginBottom: 22 }}>
                    <strong style={{ color: "#73553c" }}>Mission&nbsp;:</strong>
                    <br />
                    Offrir des solutions intelligentes pour moderniser
                    l’agriculture, améliorer les rendements, réduire l’impact
                    environnemental et accompagner les agriculteurs dans leur
                    transformation digitale.
                  </section>
                  <section style={{ marginBottom: 14 }}>
                    <strong style={{ color: "#73553c" }}>Équipe&nbsp;:</strong>
                    <br />
                    Notre équipe pluridisciplinaire regroupe ingénieurs,
                    développeurs et experts terrain, tous animés par la volonté
                    de faire évoluer l’agriculture grâce à la technologie.
                  </section>
                </div>
                {/* Bouton fermer */}
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
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default HeroCarousel;
