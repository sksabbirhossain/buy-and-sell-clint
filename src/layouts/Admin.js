import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-sm-2">
            <Sidebar />
          </div>
          <div className="col-sm-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
