import React from "react";
import { FaShoppingBasket,FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="header">
      <h1> <FaShoppingBasket/> View-Soko</h1>
      <NavBar />
      <div className="icons">
        <ul>
          <li>
            <FaSearch />
          </li>
          <li>
            <FaShoppingCart />
          </li>
          <li>
            <FaUser />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
