import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <div className="d-flex mb-4 mb-sm-0">
      <Link to="/" className={styles.socialIcon}>
        <FaFacebookF />
      </Link>
      <Link to="/" className={styles.socialIcon}>
        <FaInstagram />
      </Link>
      <Link to="/" className={styles.socialIcon}>
        <FaLinkedinIn />
      </Link>
      <Link to="/" className={styles.socialIcon}>
        <FaTwitter />
      </Link>
    </div>
  );
};

export default SocialIcons;
