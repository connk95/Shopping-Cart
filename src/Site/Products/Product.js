import React, { useState } from "react";

const Product = ({ cart, setCart, index, asset, title, age }) => {
  const [allAges] = useState([...Array(age + 1).keys()]);
  const addCart = () => {
    setCart([...cart, title]);
  };

  console.log(cart);

  return (
    <div id={`card${index}`} className="productCard">
      <img className="productImage" src={`${asset}`} alt={`${title}`}></img>
      <div id="productDesc">
        <p id="name">{`${title}`}</p>
        <div>
          <p id="price"></p>
          <select name="time" id="time">
            {allAges.map((age) => (
              <option value={age}>{age}</option>
            ))}
          </select>
          <button id="add" onClick={addCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
