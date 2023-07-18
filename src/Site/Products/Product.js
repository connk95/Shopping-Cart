import React from "react";

const Product = ({ cart, setCart, products, index, currentProducts }) => {
  const addCart = () => {
    setCart([...cart, products.name]);
  };

  return (
    <div id={`${index}product`}>
      <img className="productImage" src={`${currentProducts.asset}`}></img>
      <div id="productDesc">
        <p id="name"></p>
        <div>
          <p id="price"></p>
          <select name="time" id="time"></select>
          <button id="add" onClick={addCart}></button>
        </div>
      </div>
    </div>
  );
};

export default Product;
