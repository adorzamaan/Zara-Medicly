import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import LoadingSpinner from "../Componentes/Shared/LoadinSpinner/LoadingSpinner";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
