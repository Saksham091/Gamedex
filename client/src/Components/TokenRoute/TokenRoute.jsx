import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const isTokenValid = (token) => {
  if (!token) return false;
  try {
    const { exp } = jwtDecode(token);
    return exp > Date.now() / 1000;
  } catch {
    return false;
  }
};

const TokenRoute = () => {
  const token = sessionStorage.getItem("userId");

  return (
    isTokenValid(token) ? <Outlet /> : <Navigate to="/login" replace />
  );
};

export default TokenRoute;