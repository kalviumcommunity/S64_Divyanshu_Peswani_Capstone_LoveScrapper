// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/user');


// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password });
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Please enter all fields' });
    }
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Login failed: user not found');
      return res.status(400).json({ message: 'User does not exist' });
    }
    console.log('Stored hashed password:', user.password);
    // Validate password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match result:', isMatch);
    if (!isMatch) {
      console.log('Login failed: invalid credentials');
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // Successful login
    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/register', async (req, res) => {
  try {
    console.log('Register endpoint called with body:', req.body);
    const { name, email, password } = req.body;
    // Validate input
    if (!name || !email || !password) {
      console.log('Validation failed: missing fields', { name, email, password });
      return res.status(400).json({ message: 'Please enter all fields' });
    }
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Validation failed: user already exists', email);
      return res.status(400).json({ message: 'User already exists' });
    }
    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create new user with hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });
    // Save user
    const savedUser = await newUser.save();
    // Successful registration
    res.json({
      message: 'Registration successful',
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email
      }
    });
  } catch (err) {
    console.error('Register endpoint error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
