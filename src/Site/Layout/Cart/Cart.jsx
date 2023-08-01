import React from "react";

const Cart = ({ cart, handleRemove }) => {
  return (
    <div>
      <div id="displayCart">
        <h2>Cart</h2>
        <ul id="cartItems">
          {cart.map((cartItem, index) => (
            <li key={cartItem.title}>
              <div className="cartInfo">
                <img
                  className="cartImage"
                  src={`${cartItem.asset}`}
                  alt={`${cartItem.title}`}
                ></img>
                <p>{`[${cartItem.title}, age: ${cartItem.age}]`}</p>
                <div className="break"></div>
                <p className="remove" onClick={() => handleRemove(index)}>
                  Remove
                </p>
                <p>{`[¥${cartItem.price}]`}</p>
              </div>
            </li>
          ))}
          <li id="subtotal">
            <div>
              <p>Subtotal: </p>
              <p>
                {`[¥${cart.reduce((accumulator, object) => {
                  return accumulator + object.price;
                }, 0)}]`}
              </p>
            </div>
          </li>
          <li>
            <button id="checkout">Checkout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
