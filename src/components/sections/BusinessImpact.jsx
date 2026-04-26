import React from "react";
import { useTranslation } from "react-i18next";
import { UserPlus, CalendarCheck, Award, TrendingUp } from "lucide-react";
import "./BusinessImpact.css";

export default function BusinessImpact() {
  const { t } = useTranslation();

  const benefits = [
    {
      key: "benefit1",
      icon: <UserPlus size={22} strokeWidth={1.8} />,
      title: t("business_impact.benefit1.title"),
      description: t("business_impact.benefit1.description"),
    },
    {
      key: "benefit2",
      icon: <CalendarCheck size={22} strokeWidth={1.8} />,
      title: t("business_impact.benefit2.title"),
      description: t("business_impact.benefit2.description"),
    },
    {
      key: "benefit3",
      icon: <Award size={22} strokeWidth={1.8} />,
      title: t("business_impact.benefit3.title"),
      description: t("business_impact.benefit3.description"),
    },
    {
      key: "benefit4",
      icon: <TrendingUp size={22} strokeWidth={1.8} />,
      title: t("business_impact.benefit4.title"),
      description: t("business_impact.benefit4.description"),
    },
  ];

  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <header className="business-impact-header">
          <h2 className="business-impact-title">
            {t("business_impact.subtitle_start")}
            <span className="business-impact-title-highlight">
              {t("business_impact.subtitle_highlight")}
            </span>
            {t("business_impact.subtitle_end")}
          </h2>
          <p className="business-impact-subtitle">
            {t("business_impact.description")}
          </p>
        </header>

        <div className="business-impact-grid">
          {benefits.map((benefit) => (
            <article key={benefit.key} className="business-impact-card">
              <div className="business-impact-card-icon">{benefit.icon}</div>
              <h3 className="business-impact-card-title">{benefit.title}</h3>
              <p className="business-impact-card-description">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
