import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    toast("You Must Login Fast");
    return <Navigate to="/login"  replace />;
  }
  return children;
};

export default PrivateRoute;
