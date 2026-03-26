import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./steps2.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const stepsKeys = [
  'step1',
  'step2',
  'step3',
  'step4',
  'step5',
  'step6',
  'step7',
];

// Images pour chaque étape
const stepImages = [
  '/images/golf.jpg', // Idée & Recherche de marché
  '/images/design_plan.webp', // Conception & Développement
  '/images/workshop.webp', // Prototype & Développement technique
  '/images/club_de_golf.webp', // Tests terrain avec clubs partenaires
  '/images/inspection.webp', // Certification sécurité
  '/images/application.webp', // Production & Distribution
  '/images/couple-jouant-au-golf-ensemble.webp', // Lancement commercial
];

const Steps2 = ({ rootClassName = "" }) => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const lastActiveStepRef = useRef(0);
  const debounceTimerRef = useRef(null);

  const stepsData = stepsKeys.map((key, idx) => ({
    id: key,
    title: t(`steps.${key}.title`, `Étape ${idx + 1}`),
    desc: t(`steps.${key}.desc`, ''),
    img: stepImages[idx],
  }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        containerRef.current.style.setProperty('--mouse-x', `${x}%`);
        containerRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const stepElements = document.querySelectorAll('.stepRow');
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Annuler le timer précédent
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }

        // Debounce pour éviter les changements trop rapides
        debounceTimerRef.current = setTimeout(() => {
          let bestEntry = null;
          let bestRatio = 0;

          // Trouver l'élément le plus visible
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
              bestRatio = entry.intersectionRatio;
              bestEntry = entry;
            }
          });

          // Seulement changer si on a un ratio suffisant et que c'est différent
          if (bestEntry && bestRatio > 0.4) {
            const index = Array.from(stepElements).indexOf(bestEntry.target);
            if (index !== lastActiveStepRef.current) {
              lastActiveStepRef.current = index;
              setActiveStep(index);
            }
          }
        }, 100); // Debounce de 100ms
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: '-15% 0px -15% 0px'
      }
    );

    stepElements.forEach((el) => observer.observe(el));

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`steps2-container1 thq-section-padding full-width-bg ${rootClassName}`}
    > 
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-section-header">
          <h2 className="thq-heading-2 whityyy">{t('steps.title')}</h2>
          <p className="thq-body-large whityyy">
            {t('steps.description')}
          </p>
        </div>
        
        <div className="stepsSequence">
          {stepsData.map((step, i) => (
            <div
              key={step.id}
              className={`stepRow ${activeStep === i ? 'active' : ''}`}
            >
              {/* Image à gauche */}
              <motion.div 
                className="stepImage"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: activeStep === i ? 1 : 0.5,
                  scale: activeStep === i ? 1 : 0.97
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeInOut",
                  delay: 0.05
                }}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="stepBadge">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
              </motion.div>
              
              {/* Contenu à droite */}
              <motion.div 
                className="stepContent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: activeStep === i ? 1 : 0.3,
                  x: activeStep === i ? 0 : 30
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeInOut",
                  delay: 0.05
                }}
              >
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
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
