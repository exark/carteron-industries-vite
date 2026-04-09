import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

const COLORS = [
  '#E63946', // Rouge vif
  '#F77F00', // Orange éclatant
  '#FCBF49', // Jaune doré
  '#06A77D', // Vert émeraude
  '#2A9D8F', // Turquoise
  '#264653', // Bleu pétrole
  '#457B9D', // Bleu acier
  '#E76F51', // Corail
  '#8338EC', // Violet électrique
  '#FF006E', // Rose fuchsia
];

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

// Couleurs sémantiques pour les réponses
const getSemanticColor = (key) => {
  // Réponses positives - Vert émeraude
  if (['yes', 'yes_definitely', 'yes_often', 'yes_alot'].includes(key)) {
    return '#06A77D';
  }
  // Réponses négatives - Rouge vif
  if (['no', 'not_really', 'not_yet'].includes(key)) {
    return '#E63946';
  }
  // Réponses neutres/incertaines - Jaune doré
  if (['not_sure', 'maybe', 'sometimes', 'occasionally'].includes(key)) {
    return '#FCBF49';
  }
  // Réponses en projet/planning - Turquoise
  if (['planning'].includes(key)) {
    return '#2A9D8F';
  }
  // Fréquences basses - Bleu pétrole
  if (['less_monthly'].includes(key)) {
    return '#264653';
  }
  // Fréquences moyennes - Bleu acier
  if (['1_3_monthly'].includes(key)) {
    return '#457B9D';
  }
  // Fréquences élevées - Orange éclatant
  if (['weekly'].includes(key)) {
    return '#F77F00';
  }
  // Fréquences très élevées - Violet électrique
  if (['several_weekly'].includes(key)) {
    return '#8338EC';
  }
  // Critères importants (Q6) - Couleurs variées
  const criteriaColors = {
    safety: '#06A77D',           // Vert émeraude - priorité
    ease_of_use: '#2A9D8F',      // Turquoise
    child_comfort: '#FF006E',    // Rose fuchsia
    storage: '#F77F00',          // Orange éclatant
    design: '#8338EC',           // Violet électrique
    price: '#FCBF49',            // Jaune doré
  };
  if (criteriaColors[key]) return criteriaColors[key];
  
  // Bénéfices (Q3) - Couleurs variées
  const benefitsColors = {
    attract_customers: '#2A9D8F',    // Turquoise
    increase_frequency: '#8338EC',   // Violet électrique
    improve_experience: '#FF006E',   // Rose fuchsia
  };
  if (benefitsColors[key]) return benefitsColors[key];
  
  // Par défaut, utiliser la palette COLORS
  return null;
};

const toChartData = (obj) =>
  Object.entries(obj || {}).map(([key, value]) => ({
    name: LABEL_MAP[key] || key,
    value,
    originalKey: key,
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

export const SurveyTypePieChart = React.memo(({ byType }) => {
  const data = toChartData(byType).filter((d) => d.value > 0);
  if (!data.length) return <p style={{ color: '#94a3b8', fontSize: 13 }}>Pas encore de données.</p>;
  
  // Couleurs spécifiques pour les types d'enquête
  const TYPE_COLORS = {
    'Club': '#06A77D',    // Vert émeraude
    'Famille': '#457B9D', // Bleu acier
  };
  
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
          isAnimationActive={true}
          animationDuration={400}
        >
          {data.map((entry, i) => <Cell key={i} fill={TYPE_COLORS[entry.name] || COLORS[i % COLORS.length]} />)}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend content={renderLegend} />
      </PieChart>
    </ResponsiveContainer>
  );
});

export const SimpleBarChart = React.memo(({ data, color = '#0b2244' }) => {
  const chartData = toChartData(data).filter((d) => d.value > 0);
  if (!chartData.length) return <p style={{ color: '#94a3b8', fontSize: 13 }}>Pas encore de données.</p>;
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={chartData} layout="vertical" margin={{ left: 8, right: 16 }}>
        <XAxis type="number" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="name" width={110} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={16} isAnimationActive={true} animationDuration={400}>
          {chartData.map((entry, index) => {
            const semanticColor = getSemanticColor(entry.originalKey);
            return <Cell key={`cell-${index}`} fill={semanticColor || color} />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
});

export const StatusBarChart = React.memo(({ byStatus }) => {
  const data = toChartData(byStatus).filter((d) => d.value > 0);
  if (!data.length) return <p style={{ color: '#94a3b8', fontSize: 13 }}>Pas encore de données.</p>;
  const statusColors = {
    Nouveau: '#8338EC',      // Violet électrique
    Contacté: '#2A9D8F',     // Turquoise
    Qualifié: '#F77F00',     // Orange éclatant
    Pilote: '#06A77D',       // Vert émeraude
    Fermé: '#E63946',        // Rouge vif
  };
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ left: 8, right: 16 }}>
        <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={28} isAnimationActive={true} animationDuration={400}>
          {data.map((entry, i) => (
            <Cell key={i} fill={statusColors[entry.name] || COLORS[i % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
});

export const CountryPieChart = React.memo(({ byCountry }) => {
  const data = Object.entries(byCountry || {})
    .map(([country, count]) => ({ name: country, value: count }))
    .filter((d) => d.value > 0)
    .sort((a, b) => b.value - a.value);
  
  if (!data.length) return <p style={{ color: '#94a3b8', fontSize: 13 }}>Pas encore de données.</p>;
  
  // Couleurs pétantes et diversifiées pour les pays
  const VIBRANT_COLORS = [
    '#E63946', // Rouge vif
    '#F77F00', // Orange éclatant
    '#FCBF49', // Jaune doré
    '#06A77D', // Vert émeraude
    '#2A9D8F', // Turquoise
    '#264653', // Bleu pétrole
    '#457B9D', // Bleu acier
    '#E76F51', // Corail
    '#8338EC', // Violet électrique
    '#FF006E', // Rose fuchsia
    '#3A86FF', // Bleu royal
    '#FB5607', // Orange brûlé
    '#FFBE0B', // Jaune soleil
    '#06FFA5', // Vert menthe électrique
    '#C1121F', // Rouge carmin
  ];
  
  const renderLegend = (props) => {
    const { payload } = props;
    const total = data.reduce((sum, item) => sum + item.value, 0);
    return (
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '8px',
        fontSize: '12px',
        maxHeight: '200px',
        overflowY: 'auto',
        paddingRight: '8px',
        minWidth: '140px',
        maxWidth: '200px'
      }}>
        {payload.map((entry, index) => {
          const percent = ((entry.payload.value / total) * 100).toFixed(0);
          return (
            <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ 
                width: 10, 
                height: 10, 
                backgroundColor: entry.color,
                borderRadius: 2,
                display: 'inline-block',
                flexShrink: 0
              }} />
              <span style={{ color: '#475569', fontWeight: 500, fontSize: '11px', lineHeight: '1.3', wordBreak: 'break-word' }}>
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
          cx="32%" 
          cy="50%" 
          outerRadius={60} 
          dataKey="value"
          label={false}
          isAnimationActive={true}
          animationDuration={400}
        >
          {data.map((entry, i) => (
            <Cell 
              key={i} 
              fill={VIBRANT_COLORS[i % VIBRANT_COLORS.length]} 
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          content={renderLegend} 
          layout="vertical" 
          align="right" 
          verticalAlign="middle"
          wrapperStyle={{ paddingLeft: '5px', width: 'auto' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
});
