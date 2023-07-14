import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Site/Layout/Home/Home";
import Shop from "./Site/Layout/Shop/Shop";
import Cart from "./Site/Layout/Cart/Cart";
import About from "./Site/Layout/About/About";
import Nav from "./Site/Layout/Nav";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState([]);

  return (
    <div id="app">
      <nav>
        <Nav />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
