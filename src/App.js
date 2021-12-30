import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import PrivateRoute from "./components/PrivateRoute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Products from "./pages/Products.js";
import Category from "./pages/Category.js";
import Orders from "./pages/Orders";
import Couriers from "./pages/Couriers";
import Login from "./login/Login";
// import { useState, useEffect, useContext } from "react";
import { AuthProvider, AuthContext } from "./store/authContext";
// import Cookies from "universal-cookie";
import { Errorpage } from "./components/ErrorPage";
function App() {
  return (
    <>
      <AuthProvider>
        {/* <Login></Login> */}
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <NavBar />

                  <Routes>
                   
                    <Route path="/products" element={<Products />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/couriers" element={<Couriers />} />
                  </Routes>
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

