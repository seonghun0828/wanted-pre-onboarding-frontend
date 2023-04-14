import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  authentication: boolean;
}

const PrivateRoute = ({ authentication }: PrivateRouteProps) => {
  const isAuthenticated = !!localStorage.getItem('access_token');

  if (authentication) {
    // 인증을 해야 접근 가능한 페이지
    return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
  } else {
    // 인증을 안 한 상태여야 접근 가능한 페이지
    return isAuthenticated ? <Navigate to="/todo" /> : <Outlet />;
  }
};

export default PrivateRoute;
