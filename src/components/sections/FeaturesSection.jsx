import React from "react";
import { useTranslation } from "react-i18next";
import "./FeaturesSection.css";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      key: "feature1",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
        </svg>
      ),
      title: t("features_section.feature1.title"),
      description: t("features_section.feature1.desc")
    },
    {
      key: "feature2",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
        </svg>
      ),
      title: t("features_section.feature2.title"),
      description: t("features_section.feature2.desc")
    },
    {
      key: "feature3",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0z"/>
          <path d="m14.5 12.5 2-2"/>
          <path d="m11.5 9.5 2-2"/>
          <path d="m8.5 6.5 2-2"/>
          <path d="m17.5 15.5 2-2"/>
        </svg>
      ),
      title: t("features_section.feature3.title"),
      description: t("features_section.feature3.desc")
    },
    {
      key: "feature4",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
      ),
      title: t("features_section.feature4.title"),
      description: t("features_section.feature4.desc")
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <span className="features-label">{t("features_section.label")}</span>
        <h2 className="features-title">
          {t("features_section.title_line1")}
          <br />
          <span className="text-gradient-green-blue">{t("features_section.title_line2")}</span>
        </h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={feature.key} className="feature-item">
              <div className={`feature-icon-wrapper icon-color-${index + 1}`}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
