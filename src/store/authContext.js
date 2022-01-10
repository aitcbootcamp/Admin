import { createContext } from "react";
import { useState, useEffect, useContext } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [edit, setEdit] = useState(false);

  const [auth, setAuth] = useState("");
  useEffect(() => {
    if (cookies.get("token")) {
      setAuth(true);
    }
  }, []);

  const [getcategory, setGetCategory] = useState([]);

  useEffect(() => {
    axios.get("http://206.189.198.66/get_categories").then((res) => {
      // console.log(res.data.userData);
      const response = res.data.userData;
      setGetCategory(response);
    });
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://206.189.198.66/get_products").then((res) => {
      setProducts(res.data.userData);
    });
  }, []);

  // console.log(products);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        getcategory,
        setGetCategory,
        products,
        setProducts,
        edit,
        setEdit,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
