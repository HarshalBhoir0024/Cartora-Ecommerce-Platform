import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Login from "./pages/Login";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => setCartItems(prev => [...prev, product]);

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;