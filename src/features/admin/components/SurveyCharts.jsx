import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

const COLORS = ['#0b2244', '#1976D2', '#42a5f5', '#90caf9', '#bbdefb', '#e3f2fd'];

const LABEL_MAP = {
  // Survey type
  club:   'Club',
  family: 'Famille',
  // Club Q1
  yes: 'Oui', no: 'Non', not_sure: 'Pas sûr',
  // Club Q2
  yes_definitely: 'Certainement', sometimes: 'Parfois',
  // Club Q3
  attract_customers: 'Nouveaux clients',
  increase_frequency: 'Fréquence',
  improve_experience: 'Expérience',
  // Club Q4
  maybe: 'Peut-être',
  // Club Q5 — yes / no
  // Family Q1
  less_monthly: '< 1x/mois',
  '1_3_monthly': '1-3x/mois',
  weekly: '1x/semaine',
  several_weekly: 'Plusieurs/sem.',
  // Family Q2
  not_yet: 'Pas encore', planning: 'En projet',
  // Family Q4
  yes_often: 'Souvent', occasionally: 'Occasion.',
  // Family Q5
  yes_alot: 'Oui, beaucoup', not_really: 'Pas vraiment',
  // Family Q6
  safety: 'Sécurité', ease_of_use: 'Facilité',
  child_comfort: 'Confort enfant', storage: 'Rangement',
  design: 'Design', price: 'Prix',
  // Status
  new: 'Nouveau', contacted: 'Contacté', qualified: 'Qualifié',
  pilot_candidate: 'Pilote', closed: 'Fermé',
};

const toChartData = (obj) =>
  Object.entries(obj || {}).map(([key, value]) => ({
    name: LABEL_MAP[key] || key,
    value,
  }));

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'white', border: '1px solid #e2e8f0',
      borderRadius: 8, padding: '10px 14px', fontSize: 13,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    }}>
      <p style={{ margin: 0, fontWeight: 600, color: '#0b2244' }}>{label || payload[0].name}</p>
      <p style={{ margin: '2px 0 0', color: '#475569' }}>{payload[0].value} réponse{payload[0].value > 1 ? 's' : ''}</p>
    </div>
  );
};

export const SurveyTypePieChart = ({ byType }) => {
  const data = toChartData(byType).filter((d) => d.value > 0);
  if (!data.length) return <p style={{ color: '#94a3b8', fontSize: 13 }}>Pas encore de données.</p>;
  
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: '10px 0 0 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        fontSize: '13px'
      }}>
        {payload.map((entry, index) => {
          const total = data.reduce((sum, item) => sum + item.value, 0);
          const percent = ((entry.payload.value / total) * 100).toFixed(0);
          return (
            <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ 
                width: 12, 
                height: 12, 
                backgroundColor: entry.color,
                borderRadius: 2,
                display: 'inline-block'
              }} />
              <span style={{ color: '#475569', fontWeight: 500 }}>
                {entry.value}: {entry.payload.value} ({percent}%)
              </span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie 
          data={data} 
          cx="50%" 
          cy="45%" 
          outerRadius={70} 
          dataKey="value"
          label={false}
        >
          {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend content={renderLegend} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export const SimpleBarChart = ({ data, color = '#0b2244' }) => {
  const chartData = toChartData(data).filter((d) => d.value > 0);
  if (!chartData.length) return <p style={{ color: '#94a3b8', fontSize: 13 }}>Pas encore de données.</p>;
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={chartData} layout="vertical" margin={{ left: 8, right: 16 }}>
        <XAxis type="number" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" fill={color} radius={[0, 4, 4, 0]} barSize={16} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const StatusBarChart = ({ byStatus }) => {
  const data = toChartData(byStatus).filter((d) => d.value > 0);
  if (!data.length) return <p style={{ color: '#94a3b8', fontSize: 13 }}>Pas encore de données.</p>;
  const statusColors = {
    Nouveau: '#94a3b8', Contacté: '#1d4ed8', Qualifié: '#b45309',
    Pilote: '#15803d', Fermé: '#b91c1c',
  };
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ left: 8, right: 16 }}>
        <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={28}>
          {data.map((entry, i) => (
            <Cell key={i} fill={statusColors[entry.name] || COLORS[i % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
