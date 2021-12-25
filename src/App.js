import "./App.css";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Routes, Route}
from "react-router-dom"; 
import Home from "./pages/Home.js"
import Prodacts from "./pages/Prodacts.js"
import Category from"./pages/Category.js"
import Orders from"./pages/Orders" 
import Couriers from"./pages/Couriers" 

function App() {
  return (
  <>
 <Router>
   <NavBar />
   <Routes>
     <Route path="/" exact element={<Home/>}/>
     <Route path="/prodacts" element={<Prodacts/>}/>
     <Route path="/category" element={<Category/>}/>
     <Route path="/orders" element={<Orders/>}/>
     <Route path="/couriers" element={<Couriers/>}/>
   </Routes>
 </Router>
  
  
  </>
  )
}

export default App;
