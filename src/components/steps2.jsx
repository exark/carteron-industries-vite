import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./steps2.css";
import { useTranslation } from "react-i18next";

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

  const stepsData = stepsKeys.map((key, idx) => ({
    id: key,
    title: t(`steps.${key}.title`, `Étape ${idx + 1}`),
    desc: t(`steps.${key}.desc`, ''),
    img: stepImages[idx],
    completed: idx < 2, // First two steps are completed
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


  return (
    <div 
      ref={containerRef}
      className={`steps2-container1 thq-section-padding full-width-bg ${rootClassName}`}
      style={{ padding: 0 }}
    > 
      {/* Win2k title bar for this section */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(to right, #000080 0%, #1084d0 100%)',
        color: '#ffffff',
        fontFamily: "'Tahoma', 'MS Sans Serif', Verdana, Arial, sans-serif",
        fontSize: '11px',
        fontWeight: 'bold',
        padding: '3px 8px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        flexShrink: 0,
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0 }}>
          <rect x="0" y="0" width="12" height="12" fill="#008080"/>
          <rect x="2" y="3" width="8" height="1" fill="#ffffff"/>
          <rect x="2" y="5" width="8" height="1" fill="#ffffff"/>
          <rect x="2" y="7" width="8" height="1" fill="#ffffff"/>
        </svg>
        Development Roadmap
      </div>
      <div className="steps2-max-width thq-section-max-width" style={{ padding: '16px 24px' }}>
        <div className="steps2-section-header" style={{ paddingTop: '16px' }}>
          <h2 className="thq-heading-2 whityyy" style={{ fontSize: '16px', fontFamily: "'Tahoma', 'MS Sans Serif', Verdana, Arial, sans-serif", fontWeight: 'bold', textAlign: 'center' }}>{t('steps.title')}</h2>
          <p className="thq-body-large whityyy" style={{ fontSize: '11px', fontFamily: "'Tahoma', 'MS Sans Serif', Verdana, Arial, sans-serif", color: '#000000' }}>
            {t('steps.description')}
          </p>
        </div>
        
        <div className="stepsSequence">
          {stepsData.map((step, i) => (
            <React.Fragment key={step.id}>
              <div
                className={`stepRow ${step.completed ? 'stepCompleted' : ''}`}
              >
                {/* Image à gauche */}
                <div className="stepImage">
                  <img
                    src={step.img}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={`stepBadge ${step.completed ? 'completed' : ''}`}>
                    {step.completed ? (
                      <span>✓</span>
                    ) : (
                      <span>{String(i + 1).padStart(2, "0")}</span>
                    )}
                  </div>
                </div>
                
                {/* Contenu à droite */}
                <div className="stepContent">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
              {/* Separator after completed steps group */}
              {i === 1 && (
                <div className="completedStepsSeparator">
                  <div className="separatorLine"></div>
                  <span className="separatorText">{t('steps.in_progress', 'En cours')}</span>
                  <div className="separatorLine"></div>
                </div>
              )}
            </React.Fragment>
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
