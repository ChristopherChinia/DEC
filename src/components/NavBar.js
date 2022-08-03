import React from 'react'
import { NavLink } from "react-router-dom";

const linkStyles = {
    textDecoration: "none",
    color: "black",
    margin: "15px",
    cursor: "pointer",
    fontSize: "30px",
    fontFamily: "inherit",
  };

const NavBar = () => {
  return (
    <div className='navBar'>
           <div>
        <NavLink
          to="/home"
          exact
          style={linkStyles}
          activeStyle={{
            color: "crimson",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          exact
          style={linkStyles}
          activeStyle={{
            color: "crimson",
          }}
        >
          Products
        </NavLink>
        <NavLink
          to="/categories"
          exact
          style={linkStyles}
          activeStyle={{
            color: "crimson",
          }}
        >
          Categories
        </NavLink>

        <NavLink
          to="/reviews"
          exact
          style={linkStyles}
          activeStyle={{
            color: "crimson",
          }}
        >
          Reviews
        </NavLink>
      </div>

    </div>
  )
}

export default NavBar