import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const nav = useNavigate();
  const pay = () => {
    alert("Payment Successful!");
    nav("/");
  };

  return (
    <div className="cart" style={{ textAlign: "center" }}>
      <h2>Complete Payment</h2>
      <button className="btn" onClick={pay}>Pay Now</button>
    </div>
  );
};

export default Payment;