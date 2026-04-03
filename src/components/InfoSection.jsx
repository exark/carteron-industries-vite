import React from "react";
import { useTranslation } from "react-i18next";
import "./InfoSection.css";

export default function InfoSection() {
  const { t } = useTranslation();

  const infoCards = [
    {
      key: "card1",
      title: t("info_section.card1.title"),
      description: t("info_section.card1.desc"),
      text: t("info_section.card1.text")
    },
    {
      key: "card2",
      title: t("info_section.card2.title"),
      description: t("info_section.card2.desc"),
      text: t("info_section.card2.text")
    },
    {
      key: "card3",
      title: t("info_section.card3.title"),
      description: t("info_section.card3.desc"),
      text: t("info_section.card3.text")
    },
    {
      key: "card4",
      title: t("info_section.card4.title"),
      description: t("info_section.card4.desc"),
      text: t("info_section.card4.text")
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
          {infoCards.map((item, index) => (
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
