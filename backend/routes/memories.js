const express = require('express');
const router = express.Router();
const Memory = require('../models/Memory');

// GET all memories (for a user)
router.get('/', async (req, res) => {
  try {
    const userId = req.query.userId; 
    const memories = await Memory.find({ userId });
    res.status(200).json(memories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a specific memory by ID
router.get('/:id', async (req, res) => {
    try {
      const memory = await Memory.findById(req.params.id);
      if (!memory) {
        return res.status(404).json({ error: 'Memory not found' });
      }
      res.status(200).json(memory);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


  router.post('/', async (req, res) => {
    try {
      const newMemory = new Memory(req.body); 
      const savedMemory = await newMemory.save();
      res.status(201).json(savedMemory);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

// UPDATE (PUT) - Update a memory by ID
router.put('/:id', async (req, res) => {
    try {
      const updatedMemory = await Memory.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedMemory) {
        return res.status(404).json({ error: 'Memory not found' });
      }
      res.status(200).json(updatedMemory);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

module.exports = router;
