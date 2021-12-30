import classes from "./Logout.module.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();
export const Logout = () => {
  const navigate = useNavigate();
  const remove = (e) => {
    e.preventDefault();
    cookies.remove("token");
    navigate("login");
  };
  return (
    <button onClick={remove} className={classes.button}>
      Logout
    </button>
  );
};
