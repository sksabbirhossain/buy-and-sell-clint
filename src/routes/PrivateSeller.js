import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateSeller = ({ children }) => {
  const { currentUser, logOut } = useAuth();
  const location = useLocation();
  // get all users
  const { data, isLoading } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/get-users");
      const users = await res.json();
      return users.data;
    },
  });

  if (isLoading) {
    return "loading...";
  }

  const sellers = data?.find((user) => user.userId === currentUser.uid);

  if (sellers?.userRole !== "seller") {
    logOut();
    toast("You Must Login form this route");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateSeller;
