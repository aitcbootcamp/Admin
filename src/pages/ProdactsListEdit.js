import React from "react";
import classes from "./ProdactsList.module.css";

const ProdactsListEdit = (props) => {
  

  return (
    <div className={classes.list}>
      <p>img 1</p>
      <input type="text" />
      <p>img 2</p>
      <input type="text" />
      <p>img 3</p>
      <input type="text" />
      <p>name</p>
      <input type="text" />
      <p>price: </p>
      <input type="text" />
      <p>description</p>
      <textarea type="text" />
      <br />
      <button>save</button>
      <button onClick={() => props.setEdit(false)}>close </button>
    </div>
  );
};

export default ProdactsListEdit;
