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
  const [allProducts] = useState(productList);
  const [age, setAge] = useState();

  return (
    <div id="app">
      <nav>
        <Nav age={age} />
      </nav>
      <Routes>
        <Route path="/" element={<Home age={age} setAge={setAge} />} />
        <Route
          path="/shop"
          element={
            <Shop
              allProducts={allProducts}
              age={age}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
