import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button, Modal, Box } from "@mui/material";
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
        >
          contactez nous
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
      {/* ----- MODAL POPUP ----- */}
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
    </div>
  );
}

export default HeroCarousel;
