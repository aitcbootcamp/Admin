import "../App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "../pages/Products.js";
import Category from "../pages/Category.js";
import Orders from "../pages/Orders";
import Couriers from "../pages/Couriers";
// import Login from "./login/Login";

function Homepage() {
  return (
    <>
      {/* <Login></Login> */}
      {/* <Router> */}
      <NavBar />
      <Routes>
        
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Category />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/couriers" element={<Couriers />} />
      </Routes>
      {/* </Router> */}
    </>
  );
}

export default Homepage;
