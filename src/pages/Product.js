import React from "react";
import classes from "./Prodacts.module.css";
import axios from "axios";
// prodacLisEdit Js/Css
import ProdactsListEdit from "./ProdactsListEdit";
import { useState, useContext } from "react";
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
  const { products, setProducts } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);
  console.log(products);
  const deleteProduct = () => {
    axios
      .delete(`http://206.189.198.66/api/delete_product/${props.id}`, headers)
      .then((resp) => {
        setProducts(products.filter((product) => product.id !== props.id));
      });
  };

  return (
    <>
      <div className={classes.prodactsList}>
        <img width="200px" height="150px" src={props.img} alt="laptop" />
        <p>{props.name}</p>
        <p>{props.price}$</p>
        <p>{props.quantity}</p>

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
      <div>
        {edit && (
          <ProdactsListEdit
            id={props.id}
            setEdit={setEdit}
            img1={props.img1}
            img2={props.img2}
            img3={props.img3}
            name={props.name}
            price={props.price}
            category_id={props.category_id}
            description={props.description}
            quantity={props.quantity}
          />
        )}
      </div>
    </>
  );
};

export default Product;
