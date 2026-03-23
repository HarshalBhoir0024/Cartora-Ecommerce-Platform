import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => (
  <nav className="navbar">
    <div className="logo">Cartora</div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

export default Navbar;