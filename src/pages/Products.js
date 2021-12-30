import React from "react";
import HpImg from "../img/HPPavilion.jpg";
import classes from "./AllProducts.module.css";
import axios from "axios";
// prodacLisEdit Js/Css
import ProdactsListEdit from "./ProdactsListEdit";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../store/authContext";
import Product from "./Product";
import Cookies from "universal-cookie";
import AddProduct from "./AddProduct";

const cookies = new Cookies();
// import ProdactsListEdit from "./ProdactsListEdit";
const Products = (props) => {
  const collectData = (data) => {
    return data;
  };
  const { products, setProducts, edit, setEdit } = useContext(AuthContext);
  const [addbtn, setAddbtn] = useState(false);
  const add = (e) => {
    setAddbtn(true);
  };
  const addProduct = () => {
    console.log(collectData());

    axios.post(
      "http://206.189.198.66/api/create_product",

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.get("token"),
        },
      },
      collectData(),
      { withCredentials: true }
    );
  };
  // console.log(products);
  return (
    <>
      <button onClick={add}>Add Product</button>
      {addbtn && <AddProduct setEdit={setAddbtn} saveData={addProduct} />}
      <div className={classes.wrapper}>
        {products.map((product) => (
          <Product
            name={product.title}
            img={product.img}
            price={product.price}
            key={product.id}
            id={product.id}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
