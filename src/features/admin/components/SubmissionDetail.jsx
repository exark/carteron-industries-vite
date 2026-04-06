import React, { useState, useEffect } from 'react';
import { clubSurveyConfig, familySurveyConfig } from '../../surveys/config/surveyConfig';
import { updateSubmissionStatus } from '../services/adminService';

const STATUS_OPTIONS = [
  { value: 'new',             label: 'Nouveau' },
  { value: 'contacted',       label: 'Contacté' },
  { value: 'qualified',       label: 'Qualifié' },
  { value: 'pilot_candidate', label: 'Candidat pilote' },
  { value: 'closed',          label: 'Fermé' },
];

const getQuestionLabel = (surveyType, questionId) => {
  const config = surveyType === 'club' ? clubSurveyConfig : familySurveyConfig;
  for (const step of config.steps) {
    if (!step.questions) continue;
    const q = step.questions.find((q) => q.id === questionId);
    if (q) return q.label?.fr || q.label?.en || questionId;
  }
  return questionId;
};

const formatAnswerValue = (surveyType, questionId, value) => {
  const config = surveyType === 'club' ? clubSurveyConfig : familySurveyConfig;
  for (const step of config.steps) {
    if (!step.questions) continue;
    const q = step.questions.find((qst) => qst.id === questionId);
    if (!q) continue;

    if (q.type === 'multiselect' && Array.isArray(value)) {
      return value
        .map((v) => q.options?.find((o) => o.value === v)?.label?.fr || v)
        .join(', ');
    }
    if (q.type === 'radio') {
      return q.options?.find((o) => o.value === value)?.label?.fr || value;
    }
    return value;
  }
  return typeof value === 'object' ? JSON.stringify(value) : String(value || '');
};

const SubmissionDetail = ({ submission, onClose, onUpdated }) => {
  const [status, setStatus] = useState(submission.status);
  const [notes, setNotes] = useState(submission.admin_notes || '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    setSaveError(null);
    try {
      const updated = await updateSubmissionStatus(submission.id, status, notes);
      setSaved(true);
      onUpdated?.(updated);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setSaveError('Erreur lors de la sauvegarde.');
    } finally {
      setSaving(false);
    }
  };

  const answers = submission.answers || {};
  const surveyType = submission.survey_type;

  const formatDate = (iso) => {
    if (!iso) return '—';
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    }).format(new Date(iso));
  };

  return (
    <div className="admin-drawer-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="admin-drawer">
        <div className="admin-drawer-header">
          <h2 className="admin-drawer-title">{submission.full_name}</h2>
          <button className="admin-drawer-close" onClick={onClose} aria-label="Fermer">✕</button>
        </div>

        <div className="admin-drawer-body">
          {/* Contact info */}
          <div className="admin-drawer-section">
            <p className="admin-drawer-section-title">Informations de contact</p>
            <div className="admin-drawer-row">
              <span className="admin-drawer-row-label">Nom</span>
              <span className="admin-drawer-row-value">{submission.full_name}</span>
            </div>
            <div className="admin-drawer-row">
              <span className="admin-drawer-row-label">E-mail</span>
              <span className="admin-drawer-row-value">
                <a 
                  href={`mailto:${submission.email}`} 
                  className="admin-email-link"
                  title="Cliquer pour envoyer un email"
                >
                  {submission.email}
                </a>
              </span>
            </div>
            {submission.phone && (
              <div className="admin-drawer-row">
                <span className="admin-drawer-row-label">Téléphone</span>
                <span className="admin-drawer-row-value">{submission.phone}</span>
              </div>
            )}
            <div className="admin-drawer-row">
              <span className="admin-drawer-row-label">Pays</span>
              <span className="admin-drawer-row-value">{submission.country}</span>
            </div>
            {submission.organization_name && (
              <div className="admin-drawer-row">
                <span className="admin-drawer-row-label">Club</span>
                <span className="admin-drawer-row-value">{submission.organization_name}</span>
              </div>
            )}
            <div className="admin-drawer-row">
              <span className="admin-drawer-row-label">Date</span>
              <span className="admin-drawer-row-value">{formatDate(submission.created_at)}</span>
            </div>
            <div className="admin-drawer-row">
              <span className="admin-drawer-row-label">Enquête</span>
              <span className={`admin-badge admin-badge--${surveyType}`}>
                {surveyType === 'club' ? 'Club' : 'Famille'}
              </span>
            </div>
          </div>

          {/* Answers */}
          <div className="admin-drawer-section">
            <p className="admin-drawer-section-title">Réponses</p>
            {Object.entries(answers).map(([qId, val]) => (
              <div key={qId} className="admin-drawer-answer-item">
                <p className="admin-drawer-answer-question">
                  {getQuestionLabel(surveyType, qId)}
                </p>
                <p className={`admin-drawer-answer-value ${qId.includes('open') || qId.includes('feedback') ? 'admin-drawer-answer-textarea' : ''}`}>
                  {formatAnswerValue(surveyType, qId, val) || '—'}
                </p>
              </div>
            ))}
            {Object.keys(answers).length === 0 && (
              <p style={{ color: 'var(--neutral-gray-400)', fontSize: '0.85rem' }}>Aucune réponse enregistrée.</p>
            )}
          </div>

          {/* Admin controls */}
          <div className="admin-drawer-section">
            <p className="admin-drawer-section-title">Gestion du lead</p>

            <div className="admin-status-row">
              <label className="admin-field-label" style={{ minWidth: 'fit-content' }}>Statut</label>
              <select
                className="admin-status-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="admin-field-label" style={{ display: 'block', marginBottom: 6 }}>
                Notes admin
              </label>
              <textarea
                className="admin-notes-textarea"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Ajouter des notes internes…"
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                className="admin-save-btn"
                onClick={handleSave}
                disabled={saving}
              >
                {saving ? 'Sauvegarde…' : 'Sauvegarder'}
              </button>
              {saved && (
                <span className="admin-save-success">✓ Sauvegardé</span>
              )}
              {saveError && (
                <span style={{ fontSize: '0.8rem', color: '#dc2626' }}>{saveError}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetail;
