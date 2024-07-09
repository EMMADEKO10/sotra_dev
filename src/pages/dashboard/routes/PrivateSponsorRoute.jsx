import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const isTokenExpired = (token) => {
  if (!token) return true;
  const payload = JSON.parse(atob(token.split('.')[1]));
  return Date.now() >= payload.exp * 1000;
};

const PrivateSponsorRoute = ({ children }) => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const userId = localStorage.getItem('user');

  if (!token || isTokenExpired(token) || role !== 'sponsor' || userId !== id) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateSponsorRoute;