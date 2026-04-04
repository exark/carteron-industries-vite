import React from 'react';

const COUNTRIES_FR = [
  'France', 'Belgique', 'Suisse', 'Canada', 'Luxembourg',
  'Maroc', 'Tunisie', 'Algérie', 'Sénégal', 'Côte d\'Ivoire',
  'États-Unis', 'Royaume-Uni', 'Allemagne', 'Espagne', 'Italie',
  'Portugal', 'Pays-Bas', 'Suède', 'Norvège', 'Danemark',
  'Autre',
];

const COUNTRIES_EN = [
  'France', 'Belgium', 'Switzerland', 'Canada', 'Luxembourg',
  'Morocco', 'Tunisia', 'Algeria', 'Senegal', 'Ivory Coast',
  'United States', 'United Kingdom', 'Germany', 'Spain', 'Italy',
  'Portugal', 'Netherlands', 'Sweden', 'Norway', 'Denmark',
  'Other',
];

const SurveyContactStep = ({ values, onChange, errors, lang, includeOrganization }) => {
  const countries = lang === 'fr' ? COUNTRIES_FR : COUNTRIES_EN;

  const labels = {
    full_name:     { fr: 'Nom complet', en: 'Full name' },
    email:         { fr: 'Adresse e-mail', en: 'Email address' },
    phone:         { fr: 'Téléphone (optionnel)', en: 'Phone (optional)' },
    country:       { fr: 'Pays', en: 'Country' },
    organization:  { fr: 'Nom du club', en: 'Club name' },
    consent_label: {
      fr: 'J\'accepte que mes données soient utilisées dans le cadre de cette enquête et de la politique de confidentialité de Carteron Industries.',
      en: 'I agree that my data will be used for this survey and in accordance with Carteron Industries\' privacy policy.',
    },
    select_country: { fr: 'Sélectionnez un pays', en: 'Select a country' },
  };

  const t = (key) => labels[key]?.[lang] || labels[key]?.fr;

  return (
    <div className="survey-contact-step">
      <div className="survey-field-group">
        <label className="survey-field-label">
          {t('full_name')} <span className="survey-required">*</span>
        </label>
        <input
          type="text"
          className={`survey-field-input ${errors.full_name ? 'error' : ''}`}
          value={values.full_name || ''}
          onChange={(e) => onChange('full_name', e.target.value)}
          autoComplete="name"
        />
        {errors.full_name && <p className="survey-error-msg">{errors.full_name}</p>}
      </div>

      <div className="survey-field-group">
        <label className="survey-field-label">
          {t('email')} <span className="survey-required">*</span>
        </label>
        <input
          type="email"
          className={`survey-field-input ${errors.email ? 'error' : ''}`}
          value={values.email || ''}
          onChange={(e) => onChange('email', e.target.value)}
          autoComplete="email"
        />
        {errors.email && <p className="survey-error-msg">{errors.email}</p>}
      </div>

      <div className="survey-field-group">
        <label className="survey-field-label">{t('phone')}</label>
        <input
          type="tel"
          className={`survey-field-input ${errors.phone ? 'error' : ''}`}
          value={values.phone || ''}
          onChange={(e) => onChange('phone', e.target.value)}
          autoComplete="tel"
        />
        {errors.phone && <p className="survey-error-msg">{errors.phone}</p>}
      </div>

      <div className="survey-field-group">
        <label className="survey-field-label">
          {t('country')} <span className="survey-required">*</span>
        </label>
        <select
          className={`survey-field-input ${errors.country ? 'error' : ''}`}
          value={values.country || ''}
          onChange={(e) => onChange('country', e.target.value)}
        >
          <option value="">{t('select_country')}</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.country && <p className="survey-error-msg">{errors.country}</p>}
      </div>

      {includeOrganization && (
        <div className="survey-field-group">
          <label className="survey-field-label">
            {t('organization')} <span className="survey-required">*</span>
          </label>
          <input
            type="text"
            className={`survey-field-input ${errors.organization_name ? 'error' : ''}`}
            value={values.organization_name || ''}
            onChange={(e) => onChange('organization_name', e.target.value)}
          />
          {errors.organization_name && <p className="survey-error-msg">{errors.organization_name}</p>}
        </div>
      )}

      <div className="survey-consent">
        <label className="survey-consent-label">
          <input
            type="checkbox"
            className="survey-consent-checkbox"
            checked={!!values.consent}
            onChange={(e) => onChange('consent', e.target.checked)}
          />
          <span>{t('consent_label')}</span>
        </label>
        {errors.consent && <p className="survey-error-msg">{errors.consent}</p>}
      </div>
    </div>
  );
};

export default SurveyContactStep;
