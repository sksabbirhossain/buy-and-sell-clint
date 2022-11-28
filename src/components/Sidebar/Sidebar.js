import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { currentUser } = useAuth();
  // get all users
  const { data, isLoading } = useQuery({
    queryKey: ["alluserdata"],
    queryFn: async () => {
      const res = await fetch("https://buy-amd-sell-server.vercel.app/api/get-users");
      const users = await res.json();
      return users.data;
    },
  });

  if (isLoading) {
    return "loading...";
  }

  const users = data?.find((user) => user.userId === currentUser.uid);

  return (
    <div className={styles.sidebar}>
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard" end>
            dashboard
          </NavLink>
        </li>
        {users?.userRole === "seller" && (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/add-product">
                Add Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/my-products">
                My Products
              </Link>
            </li>
          </>
        )}
        {users?.userRole === "admin" && (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/all-sellers">
                All Sellers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/all-buyers">
                All Buyers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/reported-items">
                Reported Items
              </Link>
            </li>
          </>
        )}
        {users?.userRole === "buyer" && (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/myorders">
                My orders
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
