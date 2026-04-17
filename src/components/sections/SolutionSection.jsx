import React from "react";
import { useTranslation } from "react-i18next";
import "./SolutionSection.css";

export default function SolutionSection() {
  const { t } = useTranslation();

  const badges = [
    { key: "badge1", text: t("solution_section.badge1") },
    { key: "badge2", text: t("solution_section.badge2") },
    { key: "badge3", text: t("solution_section.badge3") },
    { key: "badge4", text: t("solution_section.badge4") }
  ];

  return (
    <section className="solution-section">
      <div className="solution-container">
        <div className="solution-image">
          <img 
            src="/images/prototype.jpeg" 
            alt="Carteron Product"
            loading="lazy"
          />
        </div>
        
        <div className="solution-content">
          <span className="solution-label">{t("solution_section.label")}</span>
          <h2 className="solution-title">
            {t("solution_section.title_line1")}
            <br />
            <span className="text-gradient-green-blue">{t("solution_section.title_line2")}</span>
          </h2>
          <p className="solution-description">
            {t("solution_section.description")}
          </p>
          
          <ul className="solution-badges">
            {badges.map((badge) => (
              <li key={badge.key} className="solution-badge">
                {badge.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
