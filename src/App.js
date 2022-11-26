import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./layouts/Admin";
import Main from "./layouts/Main";
import AddProduct from "./pages/AddProduct/AddProduct";
import AllBuyers from "./pages/AllBuyers/AllBuyers";
import AllSellers from "./pages/AllSellers/AllSellers";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyOrders from "./pages/MyOrders/MyOrders";
import MyProducts from "./pages/MyProducts/MyProducts";
import Category from "./pages/Products/Products";
import Signup from "./pages/Signup/Signup";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/:id" element={<PrivateRoute><Category /></PrivateRoute>} />
      </Route>
      <Route path="/dashboard" element={<PrivateRoute><Admin /></PrivateRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add-product" element={<AddProduct />} />
        <Route path="/dashboard/my-products" element={ <MyProducts/>} />
        <Route path="/dashboard/myorders" element={<MyOrders />} />
        <Route path="/dashboard/all-sellers" element={<AllSellers />} />
        <Route path="/dashboard/all-buyers" element={ <AllBuyers/>} />
      </Route>
    </Routes>
  );
}

export default App;
