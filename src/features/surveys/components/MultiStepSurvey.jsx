import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SurveyProgress from './SurveyProgress';
import SurveyQuestion from './SurveyQuestion';
import SurveyContactStep from './SurveyContactStep';
import SurveySuccess from './SurveySuccess';
import { submitSurvey } from '../services/surveyService';

const MultiStepSurvey = ({ config }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  const totalSteps = config.steps.length;
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({
    full_name: '', email: '', phone: '', country: '',
    organization_name: '', consent: false,
  });
  const [errors, setErrors] = useState({});
  const [contactErrors, setContactErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [success, setSuccess] = useState(false);

  const stepConfig = config.steps[currentStep - 1];
  const isContactStep = stepConfig?.type === 'contact';

  // Scroll to top whenever currentStep changes
  useEffect(() => {
    // Scroll both window and the main-content container
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  const validateStep = () => {
    if (isContactStep) return validateContact();
    const newErrors = {};
    const questions = stepConfig?.questions || [];
    questions.forEach((q) => {
      if (!q.required) return;
      const val = answers[q.id];
      if (q.type === 'multiselect') {
        if (!Array.isArray(val) || val.length === 0) {
          newErrors[q.id] = lang === 'fr'
            ? 'Veuillez sélectionner au moins une option.'
            : 'Please select at least one option.';
        }
      } else if (q.type === 'radio') {
        if (!val) {
          newErrors[q.id] = lang === 'fr'
            ? 'Veuillez sélectionner une option.'
            : 'Please select an option.';
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateContact = () => {
    const e = {};
    if (!contact.full_name || contact.full_name.trim().length < 2) {
      e.full_name = lang === 'fr' ? 'Nom requis (min. 2 caractères).' : 'Name required (min. 2 characters).';
    }
    if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      e.email = lang === 'fr' ? 'Adresse e-mail invalide.' : 'Invalid email address.';
    }
    if (!contact.country) {
      e.country = lang === 'fr' ? 'Pays requis.' : 'Country required.';
    }
    if (stepConfig.includeOrganization && !contact.organization_name?.trim()) {
      e.organization_name = lang === 'fr' ? 'Nom du club requis.' : 'Club name required.';
    }
    if (!contact.consent) {
      e.consent = lang === 'fr'
        ? 'Vous devez accepter pour continuer.'
        : 'You must agree to continue.';
    }
    setContactErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (currentStep < totalSteps) {
      setCurrentStep((s) => s + 1);
      // Smooth scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 0);
    }
  };

  const handleBack = () => {
    setCurrentStep((s) => Math.max(1, s - 1));
    // Smooth scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 0);
  };

  const handleSubmit = async () => {
    if (!validateContact()) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitSurvey({
        survey_type: config.id,
        full_name: contact.full_name,
        email: contact.email,
        phone: contact.phone || null,
        country: contact.country,
        organization_name: contact.organization_name || null,
        consent: contact.consent,
        answers,
      });
      setSuccess(true);
    } catch (err) {
      console.error('[Survey] Submit error:', err);
      setSubmitError(
        lang === 'fr'
          ? 'Une erreur s\'est produite. Veuillez réessayer.'
          : 'An error occurred. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const btnLabels = {
    next: { fr: 'Suivant', en: 'Next' },
    back: { fr: 'Retour', en: 'Back' },
    submit: { fr: 'Envoyer', en: 'Submit' },
    submitting: { fr: 'Envoi en cours…', en: 'Submitting…' },
  };
  const t = (key) => btnLabels[key]?.[lang] || btnLabels[key]?.fr;

  if (success) {
    return <SurveySuccess lang={lang} surveyType={config.id} />;
  }

  return (
    <div className="survey-wrapper">
      <SurveyProgress
        currentStep={currentStep}
        totalSteps={totalSteps}
        steps={config.steps}
        lang={lang}
      />

      <div className="survey-card">
        {!isContactStep && (
          <div className="survey-questions-list">
            {stepConfig?.questions?.map((q) => (
              <SurveyQuestion
                key={q.id}
                question={q}
                value={answers[q.id]}
                onChange={(val) => {
                  setAnswers((prev) => ({ ...prev, [q.id]: val }));
                  setErrors((prev) => ({ ...prev, [q.id]: undefined }));
                }}
                error={errors[q.id]}
                lang={lang}
              />
            ))}
          </div>
        )}

        {isContactStep && (
          <SurveyContactStep
            values={contact}
            onChange={(field, val) => {
              setContact((prev) => ({ ...prev, [field]: val }));
              setContactErrors((prev) => ({ ...prev, [field]: undefined }));
            }}
            errors={contactErrors}
            lang={lang}
            includeOrganization={stepConfig.includeOrganization}
          />
        )}

        {submitError && (
          <div className="survey-submit-error">{submitError}</div>
        )}

        <div className="survey-nav">
          {currentStep > 1 && (
            <button
              type="button"
              className="survey-btn survey-btn--secondary"
              onClick={handleBack}
              disabled={submitting}
            >
              {t('back')}
            </button>
          )}
          {currentStep < totalSteps && (
            <button
              type="button"
              className="survey-btn survey-btn--primary"
              onClick={handleNext}
            >
              {t('next')}
            </button>
          )}
          {currentStep === totalSteps && (
            <button
              type="button"
              className="survey-btn survey-btn--primary"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? t('submitting') : t('submit')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepSurvey;
