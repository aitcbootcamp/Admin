import React from "react";
import axios from "axios";
import "./Addcatgory.css";

import { useState, useEffect } from "react";
const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("http://206.189.198.66/get_categories").then((res) => {
      console.log(res.data.userData);
      const response = res.data.userData;
      setCategory(response);
    });
  }, []);

  console.log(category);

  return (
    <ul className="category">
      <div className="input">
        <input></input> <button>ADD</button>
      </div>
      {category.map((category) => (
        <li className="title" key={category.id}>
          {category.title}{" "}
        </li>
      ))}
    </ul>
  );
};

export default Category;
