import React, { useEffect } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

    if (!isAuthenticated) {
      // Redirect to login, using replace to prevent going back
      return <Navigate to="/admin_feedbacks_view" replace state={{ from: location }} />;
    }

    return children;
  };
export default ProtectedRoute;