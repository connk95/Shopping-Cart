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

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAge =
      new Date().getFullYear() - document.getElementById("ageInput").value;
    setAge(userAge);
  };

  //remove items from cart
  const handleRemove = (index) => {
    setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
  };

  //render intro page which asks for user age
  if (!age) {
    return (
      <div id="homeInput">
        <form onSubmit={handleSubmit} id="ageForm">
          <h1>Please enter your birth year</h1>
          <p>This information allows us to tailor our service to your life</p>
          <input
            type="number"
            id="ageInput"
            min="1900"
            max="2023"
            required
          ></input>
          <button type="submit">Enter store</button>
        </form>
      </div>
    );
  }
  return (
    <div id="app">
      <nav>
        <Nav age={age} cart={cart} />
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
        <Route
          path="/cart"
          element={<Cart cart={cart} handleRemove={handleRemove} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
