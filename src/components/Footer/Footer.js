import React from "react";
import {
  FaEnvelopeOpen,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import SocialIcons from "../SocialIcons/SocialIcons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={styles.footerContent}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="fw-bold">Contact Us</h4>
              <div>
                <div className="d-flex ">
                  <FaLocationArrow className="fs-5" />
                  <p className="ms-3">
                    204 Fake St, Mountain View, San Francisco, Callifonia USA
                  </p>
                </div>
                <div className="d-flex ">
                  <FaPhone className="fs-5" />
                  <p className="ms-3">+2 383 2364 219</p>
                </div>
                <div className="d-flex ">
                  <FaEnvelopeOpen className="fs-5" />
                  <p className="ms-3">buyandsell@gmail.com</p>
                </div>
              </div>

              <div className="social">
                <SocialIcons />
              </div>
            </div>
            <div className="col-md-4">
              <div className="about">
                <h4 className="fw-bold">About</h4>
                <p>
                  Buy & Sell is basically a platform where you can buy and sell
                  almost anything! We help users buy and sell everything from
                  cars to properties, jobs, recruitment, mobile phones,
                  electronics gadgets, and more.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footerContent py-3 d-flex flex-column justify-content-center align-items-center">
                <img src={logo} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <span>Copyright © 2022 Buy and Sell. All rights reserved.</span>
      </footer>
    </>
  );
};

export default Footer;
