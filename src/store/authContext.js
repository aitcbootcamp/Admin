import { createContext } from "react";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState("");
  useEffect(() => {
    if (cookies.get("token")) {
      setAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
