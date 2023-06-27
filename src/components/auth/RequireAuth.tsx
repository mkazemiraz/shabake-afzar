import React from "react";
import { useLocation, Navigate } from "react-router-dom";
const RequireAuth = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
