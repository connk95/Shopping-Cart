import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Site/Layout/Home/Home";
import Shop from "./Site/Layout/Shop/Shop";
import Cart from "./Site/Layout/Cart/Cart";
import About from "./Site/Layout/About/About";
import Nav from "./Site/Layout/Nav";
import productList from "./Site/Products/ProductList";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(productList);
  // const [page, setPage] = useState([]);

  let allProducts = Object.values(products[0].travel);

  allProducts.forEach((memory, index) => {
    console.log(memory.asset);
  });

  console.log(allProducts);

  return (
    <div id="app">
      <nav>
        <Nav />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
