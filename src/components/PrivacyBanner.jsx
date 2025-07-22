import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyBanner = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setOpen(false), 400); // Durée de l'animation
  };

  if (!open) return null;
  return (
    <div
      style={{
        position: 'fixed',
        right: 24,
        bottom: 24,
        minWidth: 320,
        maxWidth: 400,
        background: '#fff',
        color: '#222',
        borderRadius: 12,
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        padding: '18px 24px 18px 20px',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        fontSize: '1rem',
        border: '1px solid #eee',
        animation: closing
          ? 'fadeOutBanner 0.4s forwards'
          : 'fadeInBanner 0.5s',
        transition: 'none',
      }}
    >
      <span style={{ flex: 1 }}>{t('privacy_banner')}</span>
      <button
        onClick={handleClose}
        aria-label="Fermer la notification"
        style={{
          background: 'none',
          border: 'none',
          fontSize: 20,
          cursor: 'pointer',
          color: '#888',
          marginLeft: 8,
        }}
      >
        ×
      </button>
      <style>{`
        @keyframes fadeInBanner {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOutBanner {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(30px); }
        }
      `}</style>
    </div>
  );
};

export default PrivacyBanner; 