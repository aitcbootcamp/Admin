
import React from 'react';
import axios from 'axios';
import "./Addcatgory.css"
import Cookies from "universal-cookie";

import {useState, useEffect} from "react"
// import { Link } from 'react-router-dom';
const Category = ()=> {
const [value, setValue] =useState("")
const [category, setCategory]=useState([])
 
useEffect(()=>{ 
    axios.get("http://206.189.198.66/get_categories")
      .then(res => {
          console.log(res.data.userData)
         const response = res.data.userData;
       setCategory(response);
      })
  }, [])
   
const inputChange = (e)=>{
setValue(e.target.value)

}
  const cookies = new Cookies(); //cookies


  const addcategory=()=>{
    console.log(value)
    axios.post("http://206.189.198.66/api/create_category",    
    {
      title:value,
      description:""
    },
    { headers: {"Content-Type": "application/json", Authorization: `Bearer ${cookies.get("token")}` } },
    { withCredentials: true }
    ) .then((response)=> console.log(response))
  }

 

    return ( 
      <div className='box1'>
      <ul>
        
        <input value={value} onChange={inputChange}></input> <button onClick={()=>addcategory()}>ADD</button>
        
        
         {
          category
            .map(category =>
              <li className='title'  key={category.id}>{category.title} </li>,
             
            )
        } 
      </ul>
      </div>

      
    )
    
  }

export default Category;
