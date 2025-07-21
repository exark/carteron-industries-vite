import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./steps2.css";

const stepsData = [
  {
    title: "1. Prise de contact",
    desc: "Nous échangeons sur vos besoins, vos objectifs et vos contraintes pour bien comprendre votre projet.",
  },
  {
    title: "2. Conception sur-mesure",
    desc: "Nos experts imaginent et conçoivent une solution personnalisée, adaptée à votre activité et à vos attentes.",
  },
  {
    title: "3. Déploiement & tests",
    desc: "Nous installons, testons et ajustons la solution dans votre environnement pour garantir son efficacité.",
  },
  {
    title: "4. Suivi & accompagnement",
    desc: "Nous restons à vos côtés pour assurer la maintenance, l’évolution et la performance de votre solution dans la durée.",
  },
];

const Steps2 = ({ rootClassName = "" }) => {
  const timelineRef = useRef(null);
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);

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
          <h2 className="thq-heading-2">Notre accompagnement, étape par étape</h2>
          <p className="thq-body-large">
            Découvrez comment nous transformons vos besoins en solutions concrètes et innovantes, grâce à un parcours client fluide, humain et sur-mesure.
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
