const express = require('express');
const mongoose = require('mongoose');
const memoryRoutes = require('./routes/memories'); 

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());

// Routes
app.use('/memories', memoryRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
