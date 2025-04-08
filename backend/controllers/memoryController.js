const Memory = require('../models/Memory');

const getMemories = async (req, res) => {
  try {
    const memories = await Memory.find().populate('createdBy coupleId', 'name email');
    res.status(200).json({ success: true, data: memories });
  } catch (error) {
    console.error('❌ Error in getMemories:', error.message); // Add this!
    res.status(500).json({ success: false, error: 'Failed to fetch memories' });
  }
};
const createMemory = async (req, res) => {
    try {
      const { title, description, createdBy, coupleId } = req.body;
  
      if (!title || !description || !createdBy || !coupleId) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
      }
  
      const newMemory = new Memory({ title, description, createdBy, coupleId });
      await newMemory.save();
  
      res.status(201).json({ success: true, data: newMemory });
    } catch (error) {
      console.error('❌ Error in createMemory:', error.message);
      res.status(500).json({ success: false, error: 'Failed to create memory' });
    }
  };
  

module.exports = { getMemories , createMemory };
