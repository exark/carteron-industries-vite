import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../features/admin/hooks/useAdminAuth';
import {
  fetchSubmissions,
  fetchStats,
  signOutAdmin,
} from '../../features/admin/services/adminService';
import SubmissionDetail from '../../features/admin/components/SubmissionDetail';
import {
  SurveyTypePieChart,
  SimpleBarChart,
  StatusBarChart,
} from '../../features/admin/components/SurveyCharts';
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
const StatCard = ({ label, value, sub }) => (
  <div className="admin-stat-card">
    <p className="admin-stat-label">{label}</p>
    <p className="admin-stat-value">{value}</p>
    {sub && <p className="admin-stat-sub">{sub}</p>}
  </div>
);

// ── Chart wrapper ──────────────────────────────────────────
const ChartCard = ({ title, children }) => (
  <div className="admin-chart-card">
    <p className="admin-chart-title">{title}</p>
    {children}
  </div>
);

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

  useEffect(() => {
    if (!authLoading && !session) {
      navigate('/admin/login', { replace: true });
    }
  }, [session, authLoading, navigate]);

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
      setError('Erreur lors du chargement des données. Vérifiez votre connexion Supabase.');
      console.error('[AdminDashboard]', err);
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

  if (authLoading) return null;

  return (
    <div className="admin-dashboard">
      {/* Top bar */}
      <div className="admin-topbar">
        <div className="admin-topbar-left">
          <div className="admin-topbar-logo">
            <img src="/images/logo.svg" alt="Carteron Industries" />
          </div>
          <div className="admin-topbar-divider" />
          <span className="admin-topbar-title">Dashboard Admin</span>
        </div>
        <div className="admin-topbar-right">
          {session?.user?.email && (
            <span className="admin-topbar-email">{session.user.email}</span>
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

                <ChartCard title="Clubs — Intérêt pour tester le produit (Q4)">
                  <SimpleBarChart data={stats.club?.q4} />
                </ChartCard>

                <ChartCard title="Familles — Intérêt produit 2-en-1 (Q5)">
                  <SimpleBarChart data={stats.family?.q5} color="#1976D2" />
                </ChartCard>
              </div>
            )}

            {/* Recent submissions */}
            <SubmissionsTable
              submissions={submissions.slice(0, 8)}
              loading={loading}
              onView={setSelectedSubmission}
              title="Dernières soumissions"
              filterType={filterType}
              setFilterType={setFilterType}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              search={search}
              setSearch={setSearch}
              showFilters={false}
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
                <SimpleBarChart data={stats.club?.q1} />
              </ChartCard>
              <ChartCard title="Garde d'enfant = frein au golf ? (Q2)">
                <SimpleBarChart data={stats.club?.q2} />
              </ChartCard>
              <ChartCard title="Bénéfices perçus du produit (Q3, multi)">
                <SimpleBarChart data={stats.club?.q3} />
              </ChartCard>
              <ChartCard title="Club intéressé pour tester (Q4)">
                <SimpleBarChart data={stats.club?.q4} />
              </ChartCard>
              <ChartCard title="Souhaitent être contactés (Q5)">
                <SimpleBarChart data={stats.club?.q5} />
              </ChartCard>
            </div>

            <SubmissionsTable
              submissions={submissions.filter((s) => s.survey_type === 'club')}
              loading={loading}
              onView={setSelectedSubmission}
              title="Réponses clubs"
              filterType="club"
              setFilterType={setFilterType}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              search={search}
              setSearch={setSearch}
              showFilters={true}
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
                <SimpleBarChart data={stats.family?.q1} color="#1976D2" />
              </ChartCard>
              <ChartCard title="Jeunes enfants (Q2)">
                <SimpleBarChart data={stats.family?.q2} color="#1976D2" />
              </ChartCard>
              <ChartCard title="Amener l'enfant sur le parcours (Q4)">
                <SimpleBarChart data={stats.family?.q4} color="#1976D2" />
              </ChartCard>
              <ChartCard title="Intérêt pour le produit 2-en-1 (Q5)">
                <SimpleBarChart data={stats.family?.q5} color="#1976D2" />
              </ChartCard>
              <ChartCard title="Critères importants (Q6, multi)">
                <SimpleBarChart data={stats.family?.q6} color="#1976D2" />
              </ChartCard>
            </div>

            <SubmissionsTable
              submissions={submissions.filter((s) => s.survey_type === 'family')}
              loading={loading}
              onView={setSelectedSubmission}
              title="Réponses familles"
              filterType="family"
              setFilterType={setFilterType}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              search={search}
              setSearch={setSearch}
              showFilters={true}
            />
          </>
        )}

        {/* ── LEADS TAB ── */}
        {activeTab === 'leads' && (
          <SubmissionsTable
            submissions={submissions}
            loading={loading}
            onView={setSelectedSubmission}
            title="Toutes les soumissions"
            filterType={filterType}
            setFilterType={setFilterType}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            search={search}
            setSearch={setSearch}
            showFilters={true}
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
    </div>
  );
};

// ── Submissions table sub-component ───────────────────────
const SubmissionsTable = ({
  submissions, loading, onView, title,
  filterType, setFilterType, filterStatus, setFilterStatus,
  search, setSearch, showFilters,
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
                <th>Action</th>
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
                    <button className="admin-view-btn" onClick={() => onView(sub)}>
                      Voir
                    </button>
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
