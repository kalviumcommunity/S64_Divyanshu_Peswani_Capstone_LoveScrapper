const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const Memory = require('../models/Memory');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });


// GET all memories with optional search
router.get('/', async (req, res) => {
  try {
    const { search = '' } = req.query;
    const query = {
      $or: [
        { title: new RegExp(search, 'i') },
        { tags: new RegExp(search, 'i') },
        { location: new RegExp(search, 'i') }
      ]
    };

    const memories = await Memory.find(search ? query : {})
      .populate('userId', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json(memories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET memory by ID
router.get('/:id', async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);
    if (!memory) return res.status(404).json({ error: 'Memory not found' });
    res.status(200).json(memory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET memory count
router.get('/count', async (req, res) => {
  try {
    const count = await Memory.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Add new memory with image upload
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const newMemory = new Memory({
      imageUrl: `/uploads/${req.file.filename}`, // Save the image path
    });
    const savedMemory = await newMemory.save();
    res.status(201).json(savedMemory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update memory
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const updateData = req.body;
    if (req.file) {
      updateData.imageUrl = `/uploads/${req.file.filename}`;
    }

    const updatedMemory = await Memory.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedMemory) return res.status(404).json({ error: 'Memory not found' });
    res.status(200).json(updatedMemory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
