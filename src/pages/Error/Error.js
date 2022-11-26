import React from "react";
import error from "../../assets/error.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Error = () => {
  return (
    <>
      <Header />
      <div className="mt-5 d-flex justify-content-center">
        <img className="img-fluid" src={error}  alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Error;
