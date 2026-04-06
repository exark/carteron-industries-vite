import React, { useCallback, useEffect, useRef, useState, useMemo } from "react";
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
    image: "/images/couple-jouant-au-golf-ensemble.webp",
  },
  {
    key: "work",
    image: "/images/bptgreel.jpeg",
  },
  {
    key: "tech",
    image: "/images/motherwithbaby.webp",
  },
  {
    key: "community",
    image: "/images/application.webp",
  },
  {
    key: "terrain",
    image: "/images/terrain.webp",
  }
];

// Debounce helper for resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function getResponsiveClass() {
  const width = window.innerWidth;
  if (width < 600) return 'mobile';
  if (width < 900) return 'tablet-small';
  if (width < 1200) return 'tablet';
  return 'desktop';
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

  // Responsive class state with debounced resize
  const [responsiveClass, setResponsiveClass] = useState(getResponsiveClass());
  
  useEffect(() => {
    const debouncedResize = debounce(() => {
      setResponsiveClass(getResponsiveClass());
    }, 150);
    
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
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
    <div className={`hero-carousel-wrapper ${responsiveClass}`}>
      <div className="hero-carousel-nav-outer">
        <div className="hero-carousel-swiper-container">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {items.slice(0, 6).map((item, idx) => (
                <div className="embla__slide" key={idx}>
                  <div
                    className="hero-carousel-slide"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="slide-content-glass">
                      <div className="slide-title">
                        {item.name}
                      </div>
                      <div className="slide-description">
                        {item.description}
                      </div>
                      <div className="slide-popup-text">
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
