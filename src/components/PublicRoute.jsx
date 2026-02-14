import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    // Redirect to feedbacks_view if already authenticated
    return <Navigate to="/feedbacks_view" replace />;
  }

  return children;
};

export default PublicRoute;