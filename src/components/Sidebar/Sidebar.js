import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/dashboard/add-product">
            Add Products
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link">My orders</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ">All Sellers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
