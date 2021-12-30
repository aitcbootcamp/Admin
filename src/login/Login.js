import { useState, useContext } from "react";
import styles from "./login.module.css";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../store/authContext";
const cookies = new Cookies();

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("token")}`,
  },
};

function Login() {
  //   const navigate = useNavigate();
  let navigate = useNavigate();

  const url = "http://206.189.198.66/api/login_check";

  const [user, setUser] = useState("");

  const [password, setPassword] = useState("");

  const parameters = {
    username: user,
    password: password,
  };
  const saveValue = (e) => {
    e.preventDefault();
    axios
      .post(url, parameters, headers)

      .then(function (response) {
        cookies.set("token", response.data.token);
        navigate("/");
      })

      .catch((error) => {
        console.log(error);
      });

    // const userObj = {
    //   user: user,
    //   password: password,
    // };
    // console.log(userObj);
  };

  return (
    <>
      {/* <Link to="/login"> */}{" "}
      
      <form className={styles.form}>
        <label>User</label>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setUser(e.target.value)}></input>

        <label>Password</label>
        <input
          className={styles.input}
          type="password"
          onChange={(e) => setPassword(e.target.value)}></input>

        <button className={styles.button} onClick={saveValue}>
          Login
        </button>
      </form>
      
      {/* </Link> */}
    </>
  );
  
}


export default Login;
