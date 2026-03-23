const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/users/register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    const saved = await user.save();
    res.status(201).json(saved);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
});

// POST /api/users/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    res.json(user);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;