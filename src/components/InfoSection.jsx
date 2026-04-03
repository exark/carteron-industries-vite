import React from "react";
import { useTranslation } from "react-i18next";
import "./InfoSection.css";

export default function InfoSection() {
  const { t } = useTranslation();

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

  return (
    <section className="info-section">
      <div className="info-section-container">
        <div className="info-section-image">
          <img 
            src="/images/prototype.jpeg" 
            alt="Prototype Carteron Industries"
            loading="lazy"
          />
        </div>
        
        <div className="info-section-content">
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
