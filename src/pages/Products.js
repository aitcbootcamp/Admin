import React from "react";
import HpImg from "../img/HPPavilion.jpg";
import classes from "./Prodacts.module.css";
import axios from "axios";
// prodacLisEdit Js/Css
import ProdactsListEdit from "./ProdactsListEdit";
import { useState, useEffect } from "react";
const Prodacts = (props) => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/data.json").then((res) => {
      console.log(res.data)
    });
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className={classes.prodactsList}>
        <img src={HpImg} alt="laptop" />
        <p>{props.name}</p>
        <p>{props.price}$</p>
        <div>
          <button
            className={classes.buttonAddition}
            onClick={() => setEdit(true)}
          >
            edit
          </button>
        </div>
        <br />
        <button className={classes.buttonDelete}>delete</button>
      </div>
      <div>{edit && <ProdactsListEdit setEdit={setEdit} />}</div>
    </>
  );
};

export default Prodacts;
