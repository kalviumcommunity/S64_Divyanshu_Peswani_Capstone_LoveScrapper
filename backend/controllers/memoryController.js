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

module.exports = { getMemories };
