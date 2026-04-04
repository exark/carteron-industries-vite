import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../../features/admin/hooks/useAdminAuth';

const ProtectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated } = useAdminAuth();

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafc',
        fontFamily: 'var(--font-family-body)',
        color: '#64748b',
        fontSize: '0.9rem',
      }}>
        Chargement…
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
