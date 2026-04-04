import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInAdmin } from '../../features/admin/services/adminService';
import { useAdminAuth } from '../../features/admin/hooks/useAdminAuth';
import './admin.css';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAdminAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setError(null);
    setSubmitting(true);
    try {
      await signInAdmin(email, password);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Identifiants incorrects. Veuillez réessayer.');
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading) return null;

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <img src="/images/Logo-text.webp" alt="Carteron Industries" />
        </div>

        <div className="admin-login-header">
          <h1 className="admin-login-title">Espace Admin</h1>
          <p className="admin-login-subtitle">Connectez-vous pour accéder au tableau de bord.</p>
        </div>

        <form className="admin-login-form" onSubmit={handleSubmit} noValidate>
          <div className="admin-field-group">
            <label className="admin-field-label">Adresse e-mail</label>
            <input
              type="email"
              className={`admin-field-input ${error ? 'error' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
              required
            />
          </div>

          <div className="admin-field-group">
            <label className="admin-field-label">Mot de passe</label>
            <input
              type="password"
              className={`admin-field-input ${error ? 'error' : ''}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <div className="admin-login-error">{error}</div>
          )}

          <button
            type="submit"
            className="admin-login-btn"
            disabled={submitting}
          >
            {submitting ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>

        <p className="admin-login-back">
          <a href="/contact">← Retour au site</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
