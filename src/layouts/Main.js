import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
      <>
          <h3>hello</h3>
      <Outlet />
    </>
  );
};

export default Main;
