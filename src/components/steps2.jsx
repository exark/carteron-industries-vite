import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./steps2.css";
import { useTranslation } from "react-i18next";

const stepsKeys = [
  'step1',
  'step2',
  'step3',
  'step4',
];

const Steps2 = ({ rootClassName = "" }) => {
  const { t } = useTranslation();
  const timelineRef = useRef(null);
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const stepsData = stepsKeys.map((key, idx) => ({
    title: t(`steps.${key}.title`, `Étape ${idx + 1}`),
    desc: t(`steps.${key}.desc`, ''),
  }));

  // Animation d'apparition des étapes
  useEffect(() => {
    const steps = timelineRef.current.querySelectorAll('.steps2-step');
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('steps2-step-visible');
          } else {
            entry.target.classList.remove('steps2-step-visible');
          }
        });
      },
      { threshold: 0.3 }
    );
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  // Barre de progression verticale animée (haut vers bas)
  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const visibleTop = Math.max(0, windowHeight - rect.top);
      let percent = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        percent = Math.min(1, Math.max(0, visibleTop / (totalHeight + windowHeight - 100)));
      }
      setProgress(percent);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={`steps2-container1 thq-section-padding full-width-bg ${rootClassName}`}> 
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-section-header">
          <h2 className="thq-heading-2 whityyy">{t('steps.title')}</h2>
          <p className="thq-body-large whityyy">
            {t('steps.description')}
          </p>
        </div>
        <div className="steps2-timeline" ref={timelineRef}>
          {/* Barre de progression verticale animée haut vers bas */}
          <div className="steps2-timeline-progress-bar">
            <div
              className="steps2-timeline-progress-bar-fill"
              ref={progressBarRef}
              style={{ top: 0, bottom: 'auto', height: `${progress * 100}%` }}
            ></div>
          </div>
          {stepsData.map((step, idx) => (
            <div className="steps2-step" key={idx}>
              <div className="steps2-step-marker steps2-step-marker-royal">{idx + 1}</div>
              <div className="steps2-step-content">
                <div className="steps2-step-title">{step.title}</div>
                <div className="steps2-step-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Steps2.propTypes = {
  rootClassName: PropTypes.string,
};

export default Steps2;
