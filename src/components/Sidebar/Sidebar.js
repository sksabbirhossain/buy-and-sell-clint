import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className="navbar-nav mb-2 mb-lg-0">
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
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/myorders">
            My orders
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/all-sellers">
            All Sellers
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/all-buyers">All Buyers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
