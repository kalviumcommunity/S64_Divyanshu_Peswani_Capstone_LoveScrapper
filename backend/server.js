require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const memoryRoutes = require('./routes/memories');
const app = express();
app.use(express.json());// Middleware
mongoose.connect(process.env.MONGO_URL)// Database connectio
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/memories', memoryRoutes);// Routes
app.get('/', (req, res) => res.send('API Running'));// Health check
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${process.env.PORT}`));