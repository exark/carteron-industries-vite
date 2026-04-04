import React from 'react';
import { useNavigate } from 'react-router-dom';

const SurveySuccess = ({ lang, surveyType }) => {
  const navigate = useNavigate();

  const content = {
    fr: {
      icon: '✓',
      title: 'Merci pour votre participation !',
      subtitle: surveyType === 'club'
        ? 'Votre retour nous aide à concevoir le meilleur produit pour les clubs de golf.'
        : 'Votre avis nous aide à créer le chariot idéal pour les familles de golfeurs.',
      body: 'Nous avons bien reçu vos réponses. Notre équipe les étudiera avec attention et vous contactera si vous avez demandé à être recontacté.',
      cta: 'Retour au site',
    },
    en: {
      icon: '✓',
      title: 'Thank you for participating!',
      subtitle: surveyType === 'club'
        ? 'Your feedback helps us design the best product for golf clubs.'
        : 'Your input helps us create the ideal trolley for golf families.',
      body: 'We have received your answers. Our team will review them carefully and contact you if you requested to be reached out to.',
      cta: 'Back to site',
    },
  };

  const c = content[lang] || content.fr;

  return (
    <div className="survey-success">
      <div className="survey-success-icon">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="rgba(11,34,68,0.08)" />
          <path d="M14 24l7 7 13-13" stroke="#0b2244" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="survey-success-title">{c.title}</h2>
      <p className="survey-success-subtitle">{c.subtitle}</p>
      <p className="survey-success-body">{c.body}</p>
      <button
        className="survey-btn survey-btn--primary"
        onClick={() => navigate('/contact')}
      >
        {c.cta}
      </button>
    </div>
  );
};

export default SurveySuccess;
