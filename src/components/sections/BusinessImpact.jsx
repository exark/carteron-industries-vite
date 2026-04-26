import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  UserPlus,
  CalendarCheck,
  Award,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import "./BusinessImpact.css";

export default function BusinessImpact() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section
      className="business-impact-section"
      aria-labelledby="business-impact-title"
    >
      <div className="business-impact-container">
        {/* ===== HEADER ===== */}
        <header className="business-impact-header">
          <span className="business-impact-eyebrow">
            <span className="business-impact-eyebrow-dot" aria-hidden />
            {t("business_impact.eyebrow")}
          </span>
          <h2
            id="business-impact-title"
            className="business-impact-title"
          >
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

        {/* ===== BENTO GRID ===== */}
        <div className="bento-grid">
          {/* HERO — Benefit 1 */}
          <article className="bento-card bento-hero">
            <div className="bento-hero-glow" aria-hidden />
            <div className="bento-hero-grid" aria-hidden />

            <div className="bento-hero-top">
              <span className="bento-eyebrow bento-eyebrow-light">
                <span className="bento-eyebrow-dot" aria-hidden />
                {t("business_impact.benefit1.eyebrow")}
              </span>
              <div className="bento-hero-icon">
                <UserPlus size={22} strokeWidth={1.6} />
              </div>
            </div>

            <div className="bento-hero-bottom">
              <h3 className="bento-hero-title">
                {t("business_impact.benefit1.title")}
              </h3>
              <p className="bento-hero-description">
                {t("business_impact.benefit1.description")}
              </p>
              <div className="bento-hero-tags">
                <span className="bento-hero-tag">
                  {t("business_impact.benefit1.tag1")}
                </span>
                <span className="bento-hero-tag">
                  {t("business_impact.benefit1.tag2")}
                </span>
                <span className="bento-hero-tag">
                  {t("business_impact.benefit1.tag3")}
                </span>
              </div>
            </div>
          </article>

          {/* KPI BLOCK */}
          <article className="bento-card bento-kpi">
            <span className="bento-eyebrow">
              <span className="bento-eyebrow-dot" aria-hidden />
              {t("business_impact.kpi.eyebrow")}
            </span>

            <div className="bento-kpi-figure">
              <span className="bento-kpi-value">
                {t("business_impact.kpi.value")}
              </span>
              <span className="bento-kpi-unit">
                {t("business_impact.kpi.unit")}
              </span>
            </div>

            <p className="bento-kpi-label">
              {t("business_impact.kpi.label")}
            </p>

            <div className="bento-kpi-divider" aria-hidden />

            <p className="bento-kpi-hint">
              {t("business_impact.kpi.hint")}
            </p>
          </article>

          {/* MEDIUM — Benefit 4 (Loyalty) */}
          <article className="bento-card bento-medium bento-medium-loyalty">
            <div className="bento-medium-icon">
              <TrendingUp size={20} strokeWidth={1.7} />
            </div>
            <span className="bento-eyebrow">
              <span className="bento-eyebrow-dot" aria-hidden />
              {t("business_impact.benefit4.eyebrow")}
            </span>
            <h3 className="bento-medium-title">
              {t("business_impact.benefit4.title")}
            </h3>
            <p className="bento-medium-description">
              {t("business_impact.benefit4.description")}
            </p>
          </article>

          {/* MEDIUM — Benefit 2 (Course Usage) */}
          <article className="bento-card bento-medium bento-medium-usage">
            <div className="bento-medium-icon">
              <CalendarCheck size={20} strokeWidth={1.7} />
            </div>
            <span className="bento-eyebrow">
              <span className="bento-eyebrow-dot" aria-hidden />
              {t("business_impact.benefit2.eyebrow")}
            </span>
            <h3 className="bento-medium-title">
              {t("business_impact.benefit2.title")}
            </h3>
            <p className="bento-medium-description">
              {t("business_impact.benefit2.description")}
            </p>
          </article>

          {/* WIDE — Benefit 3 (Premium Positioning) */}
          <article className="bento-card bento-wide">
            <div className="bento-wide-glow" aria-hidden />

            <div className="bento-wide-left">
              <div className="bento-wide-icon">
                <Award size={26} strokeWidth={1.6} />
              </div>
              <span className="bento-eyebrow bento-eyebrow-light">
                <span className="bento-eyebrow-dot" aria-hidden />
                {t("business_impact.benefit3.eyebrow")}
              </span>
            </div>

            <div className="bento-wide-content">
              <h3 className="bento-wide-title">
                {t("business_impact.benefit3.title")}
              </h3>
              <p className="bento-wide-description">
                {t("business_impact.benefit3.description")}
              </p>
            </div>

            <div className="bento-wide-tag">
              <Sparkles size={14} strokeWidth={1.7} />
              <span>{t("business_impact.benefit3.tag")}</span>
            </div>
          </article>

          {/* IMAGE — Lifestyle */}
          <article className="bento-card bento-image">
            <img
              src="/images/famille_golf.jpeg"
              alt=""
              loading="lazy"
              className="bento-image-media"
              aria-hidden
            />
            <div className="bento-image-overlay" aria-hidden />
            <div className="bento-image-content">
              <span className="bento-eyebrow bento-eyebrow-light">
                <span className="bento-eyebrow-dot" aria-hidden />
                {t("business_impact.image.eyebrow")}
              </span>
              <p className="bento-image-caption">
                {t("business_impact.image.caption")}
              </p>
            </div>
          </article>

          {/* CTA */}
          <article className="bento-card bento-cta">
            <div className="bento-cta-glow" aria-hidden />

            <div className="bento-cta-icon">
              <Sparkles size={18} strokeWidth={1.7} />
            </div>

            <span className="bento-eyebrow bento-eyebrow-light">
              <span className="bento-eyebrow-dot" aria-hidden />
              {t("business_impact.cta.eyebrow")}
            </span>

            <h3 className="bento-cta-title">
              {t("business_impact.cta.title")}
            </h3>

            <button
              type="button"
              className="bento-cta-button"
              onClick={() => navigate("/survey/club")}
            >
              <span>{t("business_impact.cta.button")}</span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
