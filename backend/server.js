const express = require('express');
const mongoose = require('mongoose');
const memoryRoutes = require('./routes/memories');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
// Routes
app.use('/memories', memoryRoutes);
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(' Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection failed:', error.message);
});
