import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { useAuth } from "../contexts/AuthContext";

const PrivateSeller = ({ children }) => {
  const { currentUser, logOut } = useAuth();
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
    return <Spinner/>;
  }

  const sellers = data?.find((user) => user.userId === currentUser.uid);

  if (sellers?.userRole !== "seller") {
    logOut();
    toast("You Must Login form this route");
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateSeller;
