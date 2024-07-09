
import { Navigate, useParams } from 'react-router-dom';

const isTokenExpired = (token) => {
  if (!token) return true;
  const payload = JSON.parse(atob(token.split('.')[1]));
  return Date.now() >= payload.exp * 1000;
};

const PrivateAdminRoute = ({ children }) => {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if (!token || isTokenExpired(token) || role !== "admin") {
      return (
        <Navigate
          to="/login"
          replace
        />
      )
    }

    return children
  }

export default PrivateAdminRoute;