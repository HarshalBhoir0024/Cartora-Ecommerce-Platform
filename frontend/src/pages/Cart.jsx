import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item, i) => (
        <div className="cart-item" key={i}>
          <img src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
      <div className="cart-total">Total: ${total}</div>
      {cartItems.length > 0 && (
        <Link to="/payment" className="btn">Proceed to Payment</Link>
      )}
    </div>
  );
};

export default Cart;