import React from "react";

const Product = ({ cart, setCart, products, index }) => {
  const addCart = () => {
    setCart([...cart, products.name]);
  };

  return (
    <div id={`${index}product`}>
      <img></img>
      <div id="productDesc">
        <p id="name"></p>
        <div>
          <p id="price"></p>
          <select name="size" id="size"></select>
          <button id="add"></button>
        </div>
      </div>
    </div>
  );
};
