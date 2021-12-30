import React from "react";
import classes from "./Prodacts.module.css";
import axios from "axios";
// prodacLisEdit Js/Css
import ProdactsListEdit from "./ProdactsListEdit";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

import { AuthContext } from "../store/authContext";
const cookies = new Cookies();

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("token")}`,
  },
};
const Product = (props) => {
  const [edit, setEdit] = useState(false);

  const deleteProduct = () => {
    axios.delete(
      `http://206.189.198.66/api/delete_product/${props.id}`,
      headers
    );
    console.log(props.id);
  };

  return (
    <>
      <div className={classes.prodactsList}>
        <img width="200px" height="150px" src={props.img} alt="laptop" />
        <p>{props.name}</p>
        <p>{props.price}$</p>
        <div>
          <button
            className={classes.buttonAddition}
            onClick={() => setEdit(true)}>
            edit
          </button>
        </div>
        <br />
        <button className={classes.buttonDelete} onClick={deleteProduct}>
          delete
        </button>
      </div>
      <div>{edit && <ProdactsListEdit id={props.id} setEdit={setEdit} />}</div>
    </>
  );
};

export default Product;
