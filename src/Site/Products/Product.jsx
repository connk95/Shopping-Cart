import React, { useState } from "react";

const Product = ({ addCart, index, asset, title, price, allAges }) => {
  const [selectedAge, setSelectedAge] = useState();

  //set age in cart
  const handleAge = (e) => {
    setSelectedAge(e.target.value);
  };

  return (
    <div id={`card${index}`} className="productCard">
      <img className="productImage" src={`${asset}`} alt={`${title}`}></img>
      <div id="productDesc">
        <div className="productName">
          <p className="name">{`${title} [¥${price}]`}</p>
          <div className="break"></div>
        </div>
        <div className="productOptions">
          <div>
            <label htmlFor="time">Implant at age: </label>
            <select
              name="time"
              id="time"
              onChange={handleAge}
              data-testid={`ageSelect-${title}`}
            >
              {allAges.map((ages, index) => (
                <option key={`${ages}-${index}`} id={"selectAge"} value={ages}>
                  {ages}
                </option>
              ))}
            </select>
          </div>
          <button
            id="add"
            onClick={() => addCart(title, selectedAge, price, asset)}
            data-testid={`add-${title}`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
