import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBar } from "./SideBar";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { Logout } from "./Logout";

function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  console.log(SideBar[0].path);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Logout />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBar.map((item, index) => {
              return (
                <li key={index} className="item.cName">
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.titles}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
// export default className
