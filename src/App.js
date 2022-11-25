import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./layouts/Admin";
import Main from "./layouts/Main";
import AddProduct from "./pages/AddProduct/AddProduct";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Category from "./pages/Products/Products";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="/dashboard" element={<Admin />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add-product" element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
