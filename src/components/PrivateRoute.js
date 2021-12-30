import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../store/authContext";
function PrivateRoute({ children }) {
  const { auth, setAuth } = useContext(AuthContext);
  return auth && children;
}

export default PrivateRoute;
