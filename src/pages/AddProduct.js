import React from "react";
import classes from "./ProdactsList.module.css";
import { AuthContext } from "../store/authContext";
import { useContext, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Save from "./save";
const cookies = new Cookies();
const AddProduct = (props) => {
  let { getcategory } = useContext(AuthContext);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const categoryID = () => {
    // console.log(category);
    // console.log(getcategory[0].title);
    // console.log(getcategory.map((cat) => console.log(cat.title)));
    const id = getcategory
      .filter((cat) => cat.title == category)
      .map((cat) => parseInt(cat.id));
    return id[0];
  };
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
      price: 100,
      img: img1,
      img2: img2,
      img3: img3,
      quantity: 100,
    };
    axios.post(
      "http://206.189.198.66/api/create_product",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.get("token"),
        },
      },

      { withCredentials: true }
    );
  };

  console.log(getcategory[0].title);
  return (
    <div id={props.id} className={classes.list}>
      <p>img 1</p>
      <input
        type="text"
        value={img1}
        onChange={(e) => {
          setImg1(e.target.value);
        }}
      />
      <p>img 2</p>
      <input
        type="text"
        value={img2}
        onChange={(e) => {
          setImg2(e.target.value);
        }}
      />
      <p>img 3</p>
      <input
        type="text"
        value={img3}
        onChange={(e) => {
          setImg3(e.target.value);
        }}
      />
      <p>name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        <p>Category</p>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}>
          {getcategory.map((category) => (
            <option key={category.id}> {category.title}</option>
          ))}
        </select>
      </div>
      <p>price: </p>
      <input
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <p>description</p>
      <textarea
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={saveData}>save</button>
      <br />

      <button onClick={() => props.setEdit(false)}>close </button>
    </div>
  );
};

export default AddProduct;
