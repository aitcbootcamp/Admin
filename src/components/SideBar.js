import react from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBar = [
  {
    titles: "Home",
    path: "home",
    icons: <AiIcons.AiFillHome className="img3" />,
    cName: "nav-text",
  },
  {
    titles: "Products",
    path: "products",
    icons: <FaIcons.FaCartPlus className="img2" />,
    cName: "nav-text",
  },

  {
    titles: "Couriers",
    path: "couriers",
    icons: <FaIcons.FaMotorcycle className="img1" />,
    cName: "nav-text",
  },
  {
    titles: "Orders",
    path: "orders",
    icons: <IoIcons.IoMdClipboard className="img" />,
    cName: "nav-text",
  },

  {
    titles: "Category",
    path: "/main/category",
    icons: <FaIcons.FaCartArrowDown className="img0" />,
    cName: "nav-text",
  },
];
