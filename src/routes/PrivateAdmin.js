import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { useAuth } from "../contexts/AuthContext";

const PrivateAdmin = ({ children }) => {
  const { currentUser, logOut } = useAuth();
  // get all users
  const { data, isLoading } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const res = await fetch("https://buy-amd-sell-server.vercel.app/api/get-users");
      const users = await res.json();
      return users.data;
    },
  });

  if (isLoading) {
    return <Spinner/>;
  }

  const admins = data?.find((user) => user.userId === currentUser.uid);

  // console.log(seller.userRole)
  if (admins.userRole !== "admin") {
    logOut();
    toast("You Must Login form this route");
    return <Navigate to="/login"  replace />;
  }
  return children;
};

export default PrivateAdmin;
