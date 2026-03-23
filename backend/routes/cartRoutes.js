const express = require('express');
const router = express.Router();

// In-memory cart for simplicity (replace with DB for production)
let cart = [];

// GET cart
router.get('/', (req, res) => {
  res.json(cart);
});

// POST add to cart
router.post('/', (req, res) => {
  const { product } = req.body;
  cart.push(product);
  res.json(cart);
});

// DELETE clear cart
router.delete('/', (req, res) => {
  cart = [];
  res.json({ message: "Cart cleared" });
});

module.exports = router;