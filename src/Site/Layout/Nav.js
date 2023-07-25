import React from "react";
import { Link } from "react-router-dom";

//static nav bar which includes department selector, shop title, and cart
const Nav = ({ age, cart }) => {
  if (age) {
    return (
      <div id="navbar">
        <div id="department">
          <ul>
            <li>
              <Link to="/shop">Memories</Link>
            </li>
          </ul>
        </div>
        <div id="title">
          <h1>
            <Link to="/">ConCept</Link>
          </h1>
        </div>
        <div id="options">
          <ul>
            {/* <li>Login</li> */}
            {/* <li>Wishlist</li> */}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cart">Cart{`(${cart.length})`}</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Nav;
