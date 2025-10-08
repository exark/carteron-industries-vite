import React from "react";
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

  const stepsData = stepsKeys.map((key, idx) => ({
    id: key,
    title: t(`steps.${key}.title`, `Étape ${idx + 1}`),
    desc: t(`steps.${key}.desc`, ''),
    img: stepImages[idx],
  }));

  return (
    <div className={`steps2-container1 thq-section-padding full-width-bg ${rootClassName}`}> 
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-section-header">
          <h2 className="thq-heading-2 whityyy">{t('steps.title')}</h2>
          <p className="thq-body-large whityyy">
            {t('steps.description')}
          </p>
        </div>
        
        <div className="stepsSequence">
          {stepsData.map((step, i) => (
            <motion.div
              key={step.id}
              className="stepRow"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              viewport={{ amount: 0.3, once: false }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.1
              }}
            >
              {/* Image à gauche */}
              <motion.div 
                className="stepImage"
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                viewport={{ amount: 0.4, once: false }}
                transition={{ 
                  duration: 0.7, 
                  ease: "easeOut",
                  delay: 0.2
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
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                viewport={{ amount: 0.4, once: false }}
                transition={{ 
                  duration: 0.7, 
                  ease: "easeOut",
                  delay: 0.4
                }}
              >
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            </motion.div>
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
