import React from "react";

const Product = ({
  cart,
  setCart,
  products,
  index,
  asset,
  title,
  currentProducts,
}) => {
  const addCart = () => {
    setCart([...cart, products.name]);
  };

  return (
    <div id={`card${index}`}>
      <img className="productImage" src={`${asset}`}></img>
      <div id="productDesc">
        <p id="name">{`${title}`}</p>
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
