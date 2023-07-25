import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Cart</h1>
      <div id="displayCart">
        <ul id="cartItems">
          {cart.map((cartItem, index) => (
            <li>
              <div className="cartInfo">
                <img
                  className="cartImage"
                  src={`${cartItem.asset}`}
                  alt={`${cartItem.title}`}
                ></img>
                <p>{`${cartItem.title}, age: ${cartItem.age}`}</p>
                <div className="break"></div>
                <p>Edit</p>
                <p>{`[¥${cartItem.price}]`}</p>
              </div>
            </li>
          ))}
        </ul>
        <p>
          Subtotal:{" "}
          {`${cart.reduce((accumulator, object) => {
            return accumulator + object.price;
          }, 0)}`}
        </p>
      </div>
    </div>
  );
};

export default Cart;
