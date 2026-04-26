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
  const [showPassword, setShowPassword] = useState(false);

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
          <a href="/">
            <img src="/images/logo.webp" alt="Carteron Industries" />
          </a>
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
            <div className="admin-password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`admin-field-input ${error ? 'error' : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="admin-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
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
          <a href="/">← Retour au site</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
