import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import LoadingSpinner from "../Componentes/Shared/LoadinSpinner/LoadingSpinner";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(authContext);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
