import react from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBar =[
    {
        titles: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome className="img3"/>,
        cName: "nav-text"

    },
    {
          titles: "Prodacts",
    path: "/Prodacts",
    icons: <FaIcons.FaCartPlus className="img2"/>,
    cName: "nav-text"
        
    },

    {
        titles: "Couriers",
        path: "/Couriers",
        icons: <FaIcons.FaMotorcycle className="img1"/>,
        cName: "nav-text"

    },
    {
        titles: "Orders",
        path: "/Orders",
        icons: <IoIcons.IoMdClipboard className="img"/>,
        cName: "nav-text"
    },

    {
        titles: "Category",
        path: "/Category",
        icons: <FaIcons.FaCartArrowDown className="img0" />,
        cName: "nav-text"
    },




]