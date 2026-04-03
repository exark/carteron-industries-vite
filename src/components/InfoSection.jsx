import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./InfoSection.css";

export default function InfoSection() {
  const { t } = useTranslation();
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || !imageRef.current) return;

      // Vérifier si le menu est ouvert (classe 'tilt' sur #main-content)
      const mainContent = document.getElementById('main-content');
      const isMenuOpen = mainContent?.classList.contains('tilt');
      
      // Si le menu est ouvert, ne pas recalculer la position
      if (isMenuOpen) {
        return;
      }

      const sectionRect = contentRef.current.getBoundingClientRect();
      const containerTop = sectionRect.top;
      
      // Calculer le déplacement basé sur la position du contenu
      // Quand containerTop est positif (section en dessous), offset = 0
      // Quand containerTop est négatif (on a scrollé), offset augmente
      // Multiplicateur de 1.3 pour que l'image descende plus vite
      const offset = Math.max(0, -containerTop * 1.3);
      
      setScrollProgress(offset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const carouselItems = [
    {
      key: "innovation",
      title: t("carousel.innovation.name"),
      description: t("carousel.innovation.desc"),
      text: t("carousel.innovation.popup")
    },
    {
      key: "startup",
      title: t("carousel.startup.name"),
      description: t("carousel.startup.desc"),
      text: t("carousel.startup.popup")
    },
    {
      key: "work",
      title: t("carousel.work.name"),
      description: t("carousel.work.desc"),
      text: t("carousel.work.popup")
    },
    {
      key: "tech",
      title: t("carousel.tech.name"),
      description: t("carousel.tech.desc"),
      text: t("carousel.tech.popup")
    }
  ];

  // L'image suit directement le scroll du contenu
  const imageTransform = `translateY(${scrollProgress}px)`;

  return (
    <section className="info-section">
      <div className="info-section-container">
        <div 
          className="info-section-image" 
          ref={imageRef}
          style={{ transform: imageTransform }}
        >
          <img 
            src="/images/prototype.jpeg" 
            alt="Prototype Carteron Industries"
            loading="lazy"
          />
        </div>
        
        <div className="info-section-content" ref={contentRef}>
          {carouselItems.map((item, index) => (
            <div key={item.key} className="info-card">
              <div className="info-card-header">
                <h3 className="info-card-title">{item.title}</h3>
              </div>
              <p className="info-card-description">{item.description}</p>
              <p className="info-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
