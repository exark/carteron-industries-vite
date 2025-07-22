import React from 'react';
import { useTranslation } from 'react-i18next';

const flagStyle = {
  fontSize: 20,
  cursor: 'pointer',
  marginLeft: 8,
  marginRight: 0,
  background: 'none',
  border: 'none',
  outline: 'none',
  padding: 0,
  lineHeight: 1,
};

export default function LanguageSwitcher({ direction = 'row' }) {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div style={{ display: 'flex', flexDirection: direction, alignItems: 'center' }}>
      <button
        style={{ ...flagStyle, opacity: current === 'fr' ? 1 : 0.5 }}
        aria-label="Français"
        onClick={() => i18n.changeLanguage('fr')}
      >
        🇫🇷
      </button>
      <button
        style={{ ...flagStyle, opacity: current === 'en' ? 1 : 0.5 }}
        aria-label="English"
        onClick={() => i18n.changeLanguage('en')}
      >
        🇬🇧
      </button>
    </div>
  );
} 