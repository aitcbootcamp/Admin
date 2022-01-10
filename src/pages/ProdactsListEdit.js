import React from "react";
import classes from "./ProdactsList.module.css";
import { AuthContext } from "../store/authContext";
import { useContext, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Save from "./save";
const cookies = new Cookies();
const ProdactsListEdit = (props) => {
  let { getcategory } = useContext(AuthContext);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState("");
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
      price: price,
      img: img1,
      img2: img2,
      img3: img3,
      quantity: quantity,
    };

    props.collectData(data);
    console.log(cookies.get("token"));
    axios.put(
      `http://206.189.198.66/api/update_product/${props.id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + cookies.get("token"),
        },
      },
      { withCredentials: true }
    );

    console.log(data);
  };

  console.log(getcategory[0].title);
  return (
    <div id={props.id} className={classes.list}>
      <label HTMLfor="img1">Image 1</label>
      <input
        name="img1"
        type="text"
        value={img1}
        onChange={(e) => {
          setImg1(e.target.value);
        }}
      />
      <label HTMLfor="img2">Image 2</label>
      <input
        name="img2"
        type="text"
        value={img2}
        onChange={(e) => {
          setImg2(e.target.value);
        }}
      />
      <label HTMLfor="img3">Image 3</label>
      <input
        name="img3"
        type="text"
        value={img3}
        onChange={(e) => {
          setImg3(e.target.value);
        }}
      />
      <label HTMLfor="name">Name</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        <label HTMLfor="category">Category</label>
        <select
          name="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}>
          {getcategory.map((category) => (
            <option key={category.id}> {category.title}</option>
          ))}
        </select>
      </div>
      <label HTMLfor="price">Price</label>
      <input
        name="price"
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <label HTMLfor="description">Description</label>
      <textarea
        name="description"
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <label HTMLfor="quantity">Quantty</label>
      <input
        type="text"
        name="quantity"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />

      <Save saveData={saveData} setEdit={props.setEdit} />
      <br />

      <button onClick={() => props.setEdit(false)}>close </button>
    </div>
  );
};

export default ProdactsListEdit;
