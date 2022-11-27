import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./layouts/Admin";
import Main from "./layouts/Main";
import AddProduct from "./pages/AddProduct/AddProduct";
import AllBuyers from "./pages/AllBuyers/AllBuyers";
import AllSellers from "./pages/AllSellers/AllSellers";
import Blogs from "./pages/Blogs/Blogs";
import Dashboard from "./pages/Dashboard/Dashboard";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyOrders from "./pages/MyOrders/MyOrders";
import MyProducts from "./pages/MyProducts/MyProducts";
import Category from "./pages/Products/Products";
import ReportedItems from "./pages/ReportedItems/ReportedItems";
import Signup from "./pages/Signup/Signup";
import PrivateAdmin from "./routes/PrivateAdmin";
import PrivateBuyer from "./routes/PrivateBuyer";
import PrivateRoute from "./routes/PrivateRoute";
import PrivateSeller from "./routes/PrivateSeller";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/:id" element={<PrivateRoute><Category /></PrivateRoute>} />
      </Route>
      <Route path="/dashboard" element={<PrivateRoute><Admin /></PrivateRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add-product" element={<PrivateSeller><AddProduct /></PrivateSeller>} />
        <Route path="/dashboard/my-products" element={ <PrivateSeller><MyProducts/></PrivateSeller>} />
        <Route path="/dashboard/myorders" element={<PrivateBuyer><MyOrders /></PrivateBuyer>} />
        <Route path="/dashboard/all-sellers" element={<PrivateAdmin><AllSellers /></PrivateAdmin>} />
        <Route path="/dashboard/all-buyers" element={ <PrivateAdmin><AllBuyers/></PrivateAdmin>} />
        <Route path="/dashboard/reported-items" element={ <PrivateAdmin><ReportedItems/></PrivateAdmin>} />
      </Route>
      <Route path="*" element={ <Error/>} />
    </Routes>
  );
}

export default App;
