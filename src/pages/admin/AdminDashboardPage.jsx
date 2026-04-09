import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../features/admin/hooks/useAdminAuth';
import {
  fetchSubmissions,
  fetchStats,
  signOutAdmin,
  refreshSession,
  deleteSubmission,
} from '../../features/admin/services/adminService';
import SubmissionDetail from '../../features/admin/components/SubmissionDetail';
import {
  SurveyTypePieChart,
  SimpleBarChart,
  StatusBarChart,
  CountryPieChart,
} from '../../features/admin/components/SurveyCharts';
import { exportToCSV, exportToPDF } from '../../features/admin/utils/exportUtils';
import './admin.css';

const STATUS_LABELS = {
  new: 'Nouveau', contacted: 'Contacté', qualified: 'Qualifié',
  pilot_candidate: 'Candidat pilote', closed: 'Fermé',
};

const formatDate = (iso) => {
  if (!iso) return '—';
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
  }).format(new Date(iso));
};

// ── Stat card ──────────────────────────────────────────────
const StatCard = React.memo(({ label, value, sub }) => (
  <div className="admin-stat-card">
    <p className="admin-stat-label">{label}</p>
    <p className="admin-stat-value">{value}</p>
    {sub && <p className="admin-stat-sub">{sub}</p>}
  </div>
));

// ── Chart wrapper ──────────────────────────────────────────
const ChartCard = React.memo(({ title, children }) => (
  <div className="admin-chart-card">
    <p className="admin-chart-title">{title}</p>
    {children}
  </div>
));

// ── Main component ─────────────────────────────────────────
const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const { session, isLoading: authLoading } = useAdminAuth();

  const [activeTab, setActiveTab] = useState('overview');
  const [submissions, setSubmissions] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [search, setSearch] = useState('');

  // Detail drawer
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  // Delete confirmation modal
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(null);

  // Session timeout management
  const [showTimeoutModal, setShowTimeoutModal] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const timeoutWarningRef = useRef(null);
  const autoLogoutRef = useRef(null);
  const countdownRef = useRef(null);
  const lastActivityRef = useRef(
    parseInt(localStorage.getItem('admin_last_activity')) || Date.now()
  );

  useEffect(() => {
    if (!authLoading && !session) {
      navigate('/admin/login', { replace: true });
    }
  }, [session, authLoading, navigate]);

  const handleTimeoutLogout = useCallback(async () => {
    if (countdownRef.current) clearInterval(countdownRef.current);
    setShowTimeoutModal(false);
    localStorage.removeItem('admin_last_activity');
    await signOutAdmin();
    navigate('/admin/login', { replace: true });
  }, [navigate]);

  // Session timeout: 20 min warning, then 1 min to decide
  useEffect(() => {
    if (!session) return;

    const resetActivity = () => {
      const now = Date.now();
      lastActivityRef.current = now;
      localStorage.setItem('admin_last_activity', now.toString());
    };

    // Track user activity
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event => window.addEventListener(event, resetActivity));

    // Check every minute if 20 min has passed since last activity
    const checkInterval = setInterval(() => {
      const timeSinceActivity = Date.now() - lastActivityRef.current;
      const twentyMinutes = 20 * 60 * 1000;

      if (timeSinceActivity >= twentyMinutes && !showTimeoutModal) {
        // Show warning modal
        setShowTimeoutModal(true);
        setCountdown(60);

        // Start countdown
        countdownRef.current = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              handleTimeoutLogout();
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }, 60000); // Check every minute

    return () => {
      events.forEach(event => window.removeEventListener(event, resetActivity));
      clearInterval(checkInterval);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [session, showTimeoutModal, handleTimeoutLogout]);

  const handleExtendSession = async () => {
    try {
      await refreshSession();
      const now = Date.now();
      lastActivityRef.current = now;
      localStorage.setItem('admin_last_activity', now.toString());
      setShowTimeoutModal(false);
      if (countdownRef.current) clearInterval(countdownRef.current);
    } catch (err) {
      console.error('Failed to refresh session:', err);
      handleTimeoutLogout();
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  // Optimisation: Mémoriser les soumissions filtrées
  const clubSubmissions = useMemo(
    () => submissions.filter((s) => s.survey_type === 'club'),
    [submissions]
  );

  const familySubmissions = useMemo(
    () => submissions.filter((s) => s.survey_type === 'family'),
    [submissions]
  );

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [subs, statsData] = await Promise.all([
        fetchSubmissions({ surveyType: filterType, status: filterStatus, search }),
        fetchStats(),
      ]);
      setSubmissions(subs);
      setStats(statsData);
    } catch (err) {
      console.error('[AdminDashboard] Load error:', err);
      setError('Erreur de chargement. Veuillez rafraîchir la page.');
    } finally {
      setLoading(false);
    }
  }, [filterType, filterStatus, search]);

  useEffect(() => {
    if (session) loadData();
  }, [session, loadData]);

  const handleSignOut = async () => {
    await signOutAdmin();
    navigate('/admin/login', { replace: true });
  };

  const handleSubmissionUpdated = (updated) => {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === updated.id ? updated : s))
    );
    if (stats) loadData();
  };

  const handleDeleteSubmission = async (id) => {
    const submission = submissions.find(s => s.id === id);
    setDeleteConfirmModal(submission);
  };

  const confirmDelete = async () => {
    if (!deleteConfirmModal) return;
    const id = deleteConfirmModal.id;
    setDeleteConfirmModal(null);
    
    try {
      await deleteSubmission(id);
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
      loadData();
    } catch (err) {
      console.error('[AdminDashboard] Delete error:', err);
      alert('Erreur lors de la suppression. Veuillez réessayer.');
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmModal(null);
  };

  const handleExportCSV = (data) => {
    const filename = activeTab === 'overview' ? 'all_submissions' : 
                     activeTab === 'club' ? 'club_submissions' : 
                     activeTab === 'family' ? 'family_submissions' : 
                     'leads_submissions';
    exportToCSV(data, filename);
  };

  const handleExportPDF = (data) => {
    const filename = activeTab === 'overview' ? 'all_submissions' : 
                     activeTab === 'club' ? 'club_submissions' : 
                     activeTab === 'family' ? 'family_submissions' : 
                     'leads_submissions';
    exportToPDF(data, stats, filename);
  };

  if (authLoading) return null;

  return (
    <div className="admin-dashboard">
      {/* Top bar */}
      <div className="admin-topbar">
        <div className="admin-topbar-left">
          <div className="admin-topbar-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src="/images/logo.svg" alt="Carteron Industries" />
          </div>
          <div className="admin-topbar-divider" />
          <span className="admin-topbar-title">Dashboard Admin</span>
        </div>
        <div className="admin-topbar-right">
          {session?.user && (
            <span className="admin-topbar-email">
              Bonjour {session.user.user_metadata?.full_name || 
                       session.user.user_metadata?.name || 
                       session.user.email?.split('@')[0]} !
            </span>
          )}
          <button className="admin-signout-btn" onClick={handleSignOut}>
            Déconnexion
          </button>
        </div>
      </div>

      <div className="admin-content">
        {error && <div className="admin-error-banner">{error}</div>}

        {/* Tabs */}
        <div className="admin-tabs">
          {[
            { id: 'overview', label: 'Vue d\'ensemble' },
            { id: 'club',     label: 'Clubs de golf' },
            { id: 'family',   label: 'Familles' },
            { id: 'leads',    label: 'Leads' },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── OVERVIEW TAB ── */}
        {activeTab === 'overview' && (
          <>
            {/* Stat cards */}
            <div className="admin-stats-grid">
              <StatCard label="Total réponses" value={stats?.total ?? '—'} />
              <StatCard label="Clubs" value={stats?.byType?.club ?? '—'} sub="enquête club" />
              <StatCard label="Familles" value={stats?.byType?.family ?? '—'} sub="enquête famille" />
              <StatCard label="Nouveaux" value={stats?.byStatus?.new ?? '—'} sub="à traiter" />
              <StatCard label="Candidats pilotes" value={stats?.byStatus?.pilot_candidate ?? '—'} />
              <StatCard label="Contactés" value={stats?.byStatus?.contacted ?? '—'} />
            </div>

            {/* Charts */}
            {stats && (
              <div className="admin-charts-grid">
                <ChartCard title="Répartition par type d'enquête">
                  <SurveyTypePieChart byType={stats.byType} />
                </ChartCard>

                <ChartCard title="Pipeline par statut">
                  <StatusBarChart byStatus={stats.byStatus} />
                </ChartCard>

                <ChartCard title="Répartition par pays">
                  <CountryPieChart byCountry={stats.byCountry} />
                </ChartCard>

                <ChartCard title="Clubs — Intérêt pour tester le produit (Q4)">
                  <SimpleBarChart data={stats.club?.q4} color="#15803d" />
                </ChartCard>

                <ChartCard title="Familles — Intérêt produit 2-en-1 (Q5)">
                  <SimpleBarChart data={stats.family?.q5} color="#db2777" />
                </ChartCard>
              </div>
            )}

            {/* Recent submissions */}
            <SubmissionsTable
              submissions={submissions.slice(0, 8)}
              loading={loading}
              onView={setSelectedSubmission}
              onDelete={handleDeleteSubmission}
              title="Dernières soumissions"
              filterType={filterType}
              setFilterType={setFilterType}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              search={search}
              setSearch={setSearch}
              showFilters={false}
              onExportCSV={() => handleExportCSV(submissions)}
              onExportPDF={() => handleExportPDF(submissions)}
            />
          </>
        )}

        {/* ── CLUB TAB ── */}
        {activeTab === 'club' && stats && (
          <>
            <div className="admin-stats-grid">
              <StatCard label="Clubs répondants" value={stats.byType?.club ?? '—'} />
              <StatCard label="Partenariat pilote" value={stats.club?.q5?.yes ?? '—'} sub="ont dit Oui" />
              <StatCard label="Intéressés à tester" value={stats.club?.q4?.yes ?? '—'} sub="ont dit Oui" />
            </div>

            <div className="admin-charts-grid">
              <ChartCard title="Jeunes parents parmi les membres (Q1)">
                <SimpleBarChart data={stats.club?.q1} color="#0891b2" />
              </ChartCard>
              <ChartCard title="Garde d'enfant = frein au golf ? (Q2)">
                <SimpleBarChart data={stats.club?.q2} color="#7c3aed" />
              </ChartCard>
              <ChartCard title="Bénéfices perçus du produit (Q3, multi)">
                <SimpleBarChart data={stats.club?.q3} color="#ea580c" />
              </ChartCard>
              <ChartCard title="Club intéressé pour tester (Q4)">
                <SimpleBarChart data={stats.club?.q4} color="#15803d" />
              </ChartCard>
              <ChartCard title="Souhaitent être contactés (Q5)">
                <SimpleBarChart data={stats.club?.q5} color="#c5a37a" />
              </ChartCard>
            </div>

            <SubmissionsTable
              submissions={clubSubmissions}
              loading={loading}
              onView={setSelectedSubmission}
              onDelete={handleDeleteSubmission}
              title="Réponses clubs"
              filterType="club"
              setFilterType={setFilterType}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              search={search}
              setSearch={setSearch}
              showFilters={true}
              onExportCSV={() => handleExportCSV(clubSubmissions)}
              onExportPDF={() => handleExportPDF(clubSubmissions)}
            />
          </>
        )}

        {/* ── FAMILY TAB ── */}
        {activeTab === 'family' && stats && (
          <>
            <div className="admin-stats-grid">
              <StatCard label="Familles répondantes" value={stats.byType?.family ?? '—'} />
              <StatCard label="Très intéressées" value={stats.family?.q5?.yes_alot ?? '—'} sub="produit 2-en-1" />
              <StatCard label="Ont voulu amener leur enfant" value={stats.family?.q4?.yes_often ?? '—'} sub="souvent" />
            </div>

            <div className="admin-charts-grid">
              <ChartCard title="Fréquence de jeu (Q1)">
                <SimpleBarChart data={stats.family?.q1} color="#db2777" />
              </ChartCard>
              <ChartCard title="Jeunes enfants (Q2)">
                <SimpleBarChart data={stats.family?.q2} color="#0891b2" />
              </ChartCard>
              <ChartCard title="Amener l'enfant sur le parcours (Q4)">
                <SimpleBarChart data={stats.family?.q4} color="#7c3aed" />
              </ChartCard>
              <ChartCard title="Intérêt pour le produit 2-en-1 (Q5)">
                <SimpleBarChart data={stats.family?.q5} color="#15803d" />
              </ChartCard>
              <ChartCard title="Critères importants (Q6, multi)">
                <SimpleBarChart data={stats.family?.q6} color="#ea580c" />
              </ChartCard>
            </div>

            <SubmissionsTable
              submissions={familySubmissions}
              loading={loading}
              onView={setSelectedSubmission}
              onDelete={handleDeleteSubmission}
              title="Réponses familles"
              filterType="family"
              setFilterType={setFilterType}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              search={search}
              setSearch={setSearch}
              showFilters={true}
              onExportCSV={() => handleExportCSV(familySubmissions)}
              onExportPDF={() => handleExportPDF(familySubmissions)}
            />
          </>
        )}

        {/* ── LEADS TAB ── */}
        {activeTab === 'leads' && (
          <SubmissionsTable
            submissions={submissions}
            loading={loading}
            onView={setSelectedSubmission}
            onDelete={handleDeleteSubmission}
            title="Toutes les soumissions"
            filterType={filterType}
            setFilterType={setFilterType}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            search={search}
            setSearch={setSearch}
            showFilters={true}
            onExportCSV={() => handleExportCSV(submissions)}
            onExportPDF={() => handleExportPDF(submissions)}
          />
        )}
      </div>

      {/* Drawer */}
      {selectedSubmission && (
        <SubmissionDetail
          submission={selectedSubmission}
          onClose={() => setSelectedSubmission(null)}
          onUpdated={handleSubmissionUpdated}
        />
      )}

      {/* Delete confirmation modal */}
      {deleteConfirmModal && (
        <div className="admin-delete-modal-backdrop" onClick={cancelDelete}>
          <div className="admin-delete-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="admin-delete-modal-title">Confirmer la suppression</h2>
            <p className="admin-delete-modal-text">
              Êtes-vous sûr de vouloir supprimer la soumission de <strong>{deleteConfirmModal.full_name}</strong> ?
              <br />
              <br />
              Cette action est <strong>irréversible</strong> et supprimera définitivement toutes les données associées.
            </p>
            <div className="admin-delete-modal-info">
              <div className="admin-delete-modal-info-item">
                <span className="admin-delete-modal-info-label">Type :</span>
                <span className={`admin-badge admin-badge--${deleteConfirmModal.survey_type}`}>
                  {deleteConfirmModal.survey_type === 'club' ? 'Club' : 'Famille'}
                </span>
              </div>
              <div className="admin-delete-modal-info-item">
                <span className="admin-delete-modal-info-label">Date :</span>
                <span>{formatDate(deleteConfirmModal.created_at)}</span>
              </div>
            </div>
            <div className="admin-delete-modal-actions">
              <button 
                className="admin-delete-modal-btn admin-delete-modal-btn-cancel"
                onClick={cancelDelete}
              >
                Annuler
              </button>
              <button 
                className="admin-delete-modal-btn admin-delete-modal-btn-confirm"
                onClick={confirmDelete}
              >
                Supprimer définitivement
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Session timeout modal */}
      {showTimeoutModal && (
        <div className="admin-timeout-modal-backdrop">
          <div className="admin-timeout-modal">
            <div className="admin-timeout-modal-icon">⏱️</div>
            <h2 className="admin-timeout-modal-title">Session inactive</h2>
            <p className="admin-timeout-modal-text">
              Votre session est inactive depuis 20 minutes.
              <br />
              Souhaitez-vous rester connecté ?
            </p>
            <div className="admin-timeout-modal-countdown">
              Déconnexion automatique dans <strong>{countdown}</strong> seconde{countdown > 1 ? 's' : ''}
            </div>
            <div className="admin-timeout-modal-actions">
              <button 
                className="admin-timeout-btn admin-timeout-btn-extend"
                onClick={handleExtendSession}
              >
                Rester connecté
              </button>
              <button 
                className="admin-timeout-btn admin-timeout-btn-logout"
                onClick={handleTimeoutLogout}
              >
                Me déconnecter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── Submissions table sub-component ───────────────────────
const SubmissionsTable = ({
  submissions, loading, onView, onDelete, title,
  filterType, setFilterType, filterStatus, setFilterStatus,
  search, setSearch, showFilters, onExportCSV, onExportPDF,
}) => {
  const [localSearch, setLocalSearch] = useState(search || '');

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') setSearch(localSearch);
  };

  return (
    <div className="admin-table-card">
      <div className="admin-table-toolbar">
        <span className="admin-table-toolbar-title">{title}</span>

        {showFilters && (
          <>
            <input
              type="text"
              className="admin-search-input"
              placeholder="Rechercher nom / email…"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              onBlur={() => setSearch(localSearch)}
            />
            <select
              className="admin-filter-select"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">Tous types</option>
              <option value="club">Club</option>
              <option value="family">Famille</option>
            </select>
            <select
              className="admin-filter-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Tous statuts</option>
              {Object.entries(STATUS_LABELS).map(([v, l]) => (
                <option key={v} value={v}>{l}</option>
              ))}
            </select>
          </>
        )}

        {/* Export buttons */}
        <div className="admin-export-buttons">
          <button 
            className="admin-export-btn admin-export-btn-csv"
            onClick={onExportCSV}
            disabled={!submissions || submissions.length === 0}
            title="Exporter en CSV"
          >
            📊 CSV
          </button>
          <button 
            className="admin-export-btn admin-export-btn-pdf"
            onClick={onExportPDF}
            disabled={!submissions || submissions.length === 0}
            title="Exporter en PDF"
          >
            📄 PDF
          </button>
        </div>
      </div>

      <div className="admin-table-wrap">
        {loading ? (
          <div className="admin-loading">Chargement…</div>
        ) : submissions.length === 0 ? (
          <div className="admin-table-empty">Aucune soumission trouvée.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Nom</th>
                <th>E-mail</th>
                <th>Pays</th>
                <th>Type</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr key={sub.id} onClick={() => onView(sub)}>
                  <td>{formatDate(sub.created_at)}</td>
                  <td className="admin-td-name">{sub.full_name}</td>
                  <td className="admin-td-email">{sub.email}</td>
                  <td>{sub.country}</td>
                  <td>
                    <span className={`admin-badge admin-badge--${sub.survey_type}`}>
                      {sub.survey_type === 'club' ? 'Club' : 'Famille'}
                    </span>
                  </td>
                  <td>
                    <span className={`admin-badge admin-badge--${sub.status}`}>
                      {STATUS_LABELS[sub.status] || sub.status}
                    </span>
                  </td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <div className="admin-action-buttons">
                      <button className="admin-view-btn" onClick={() => onView(sub)}>
                        Voir
                      </button>
                      <button className="admin-delete-btn" onClick={() => onDelete(sub.id)} title="Supprimer">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
