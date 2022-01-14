import React from "react";
import HpImg from "../img/HPPavilion.jpg";
import classes from "./AllProducts.module.css";
import axios from "axios";
// prodacLisEdit Js/Css
import ProdactsListEdit from "./ProdactsListEdit";
import { useState, useContext } from "react";
import { AuthContext } from "../store/authContext";
import Product from "./Product";
import Cookies from "universal-cookie";
import AddProduct from "./AddProduct";

const cookies = new Cookies();
// import ProdactsListEdit from "./ProdactsListEdit";
const Products = (props) => {
  const { products, setProducts, edit, setEdit } = useContext(AuthContext);
  const [addbtn, setAddbtn] = useState(false);
  const add = (e) => {
    setAddbtn(true);
  };

  // console.log(products);
  return (
    <>
      <button onClick={add}>Add Product</button>
      {addbtn && <AddProduct setEdit={setAddbtn} />}
      <div className={classes.wrapper}>
        {products.map((product) => (
          <Product
            name={product.title}
            img={product.img}
            price={product.price}
            key={product.id}
            id={product.id}
            quantity={product.quantity}
            img1={product.img}
            img2={product.img2}
            img3={product.img3}
            category_id={product.category_id}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
