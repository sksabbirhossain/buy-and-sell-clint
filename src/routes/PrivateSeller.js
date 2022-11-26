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
    queryKey: ["allseller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/get-users");
      const users = await res.json();
      return users.data;
    },
  });

  const seller = data?.find((user) => user.userId === currentUser.uid);

  if (isLoading) {
    return "loading...";
  }
  // console.log(seller.userRole)
  if (seller.userRole !== "seller") {
    logOut();
    toast("You Must Login form this route");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateSeller;
