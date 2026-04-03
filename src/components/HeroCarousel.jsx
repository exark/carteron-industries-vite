import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate } from "react-router-dom";
import "./HeroCarousel.css";
import { useTranslation } from "react-i18next";

const itemsData = [
  {
    key: "innovation",
    image: "/images/equipement-d-a-faible-angle.jpg",
  },
  {
    key: "startup",
    image: "/images/motherwithbaby.webp",
  },
  {
    key: "work",
    image: "/images/bptgreel.jpeg",
  },
  {
    key: "tech",
    image: "/images/application.webp",
  }
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
  if (width < 600) return "350px"; // Increased to 350px for bigger mobile carousel
  if (width < 900) return "320px";
  if (width < 1200) return "400px";
  return "450px";
}

function getSlideTitleSize() {
  const width = window.innerWidth;
  if (width < 600) return "1.4rem"; // Increased to 1.4rem for bigger mobile carousel
  if (width < 900) return "1.4rem";
  if (width < 1200) return "1.6rem";
  return "1.45rem";
}

function getSlideDescSize() {
  const width = window.innerWidth;
  if (width < 600) return "0.95rem"; // Increased to 0.95rem for bigger mobile carousel
  if (width < 900) return "0.9rem";
  if (width < 1200) return "1rem";
  return "1.13rem";
}

export default function HeroCarousel() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const items = itemsData.map(item => ({
    ...item,
    name: t(`carousel.${item.key}.name`),
    description: t(`carousel.${item.key}.desc`),
    popupText: t(`carousel.${item.key}.popup`),
  }));

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, slidesToScroll: 1, align: "start", dragFree: false }
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



  return (
    <div className="hero-carousel-wrapper">
      <div className="hero-carousel-nav-outer">
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
                      justifyContent: "flex-end",
                    }}
                  >
                    {/* Combined title, description, and popup text */}
                    <div
                      className="slide-content-glass"
                      style={{
                        width: "100%",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingBottom: "20px",
                        paddingTop: window.innerWidth < 600 ? "24px" : "24px", // Increased top padding for bigger mobile carousel
                        borderBottomLeftRadius: "22px",
                        borderBottomRightRadius: "22px",
                        background: "linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0) 100%)",
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)",
                        boxShadow: "0 -2px 12px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div
                        className="slide-title"
                        style={{
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: slideTitleSize,
                          marginBottom: window.innerWidth < 600 ? "6px" : "4px",
                          textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        className="slide-description"
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          fontSize: slideDescSize,
                          textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                          lineHeight: 1.4,
                          marginBottom: "8px",
                        }}
                      >
                        {item.description}
                      </div>
                      <div
                        className="slide-popup-text"
                        style={{
                          color: "rgba(255, 255, 255, 0.85)",
                          fontSize: window.innerWidth < 600 ? "0.85rem" : "0.95rem",
                          textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.popupText}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-carousel-arrows">
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
      </div>

    </div>
  );
}
