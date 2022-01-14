import React from "react";
import classes from "./ProdactsList.module.css";
import { AuthContext } from "../store/authContext";
import { useContext, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Save from "./save";
const cookies = new Cookies();
const ProdactsListEdit = (props) => {
  let { getcategory, products, setProducts, edit, setEdit } =
    useContext(AuthContext);
  const filteredcategory = getcategory
    .filter((cat) => cat.id === props.category_id)
    .map((cat) => cat.title)
    .join("");
  const [img1, setImg1] = useState(props.img1);
  const [img2, setImg2] = useState(props.img2);
  const [img3, setImg3] = useState(props.img3);
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const [quantity, setQuantity] = useState(props.quantity);
  const [category, setCategory] = useState(filteredcategory);
  const [description, setDescription] = useState(props.description);

  const categoryID = () => {
    // console.log(category);
    // console.log(getcategory[0].title);
    // console.log(getcategory.map((cat) => console.log(cat.title)));
    const id = getcategory
      .filter((cat) => cat.title == category)
      .map((cat) => parseInt(cat.id));
    return id[0];
  };
  console.log(filteredcategory);
  console.log(categoryID());
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  };
  const saveData = () => {
    const data = {
      title: name,
      category_id: categoryID(),
      description: description,
      price: price,
      img: img1,
      img2: img2,
      img3: img3,
      quantity: quantity,
    };
    console.log(data);
    // props.collectData(data);
    console.log(cookies.get("token"));
    axios
      .put(
        `http://206.189.198.66/api/update_product/${props.id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookies.get("token"),
          },
        },
        { withCredentials: true }
      )
      .then((resp) => {
        setProducts(resp.data.message);
      });
  };
  const saveAndClose = () => {
    saveData();
    props.setEdit(false);
  };
  return (
    <div id={props.id} className={classes.list}>
      <label htmlFor="img1">Image 1</label>
      <input
        name="img1"
        type="text"
        value={img1}
        onChange={(e) => {
          setImg1(e.target.value);
        }}
      />
      <label htmlFor="img2">Image 2</label>
      <input
        name="img2"
        type="text"
        value={img2}
        onChange={(e) => {
          setImg2(e.target.value);
        }}
      />
      <label htmlFor="img3">Image 3</label>
      <input
        name="img3"
        type="text"
        value={img3}
        onChange={(e) => {
          setImg3(e.target.value);
        }}
      />
      <label htmlFor="name">Name</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}>
          {getcategory.map((category) => (
            <option key={category.id} defaultValue>
              {" "}
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <label htmlFor="price">Price</label>
      <input
        name="price"
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <label htmlFor="quantity">Quantty</label>
      <input
        type="text"
        name="quantity"
        // value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />

      <button onClick={() => saveAndClose()}>save</button>
      <br />

      <button onClick={() => props.setEdit(false)}>close </button>
    </div>
  );
};

export default ProdactsListEdit;
