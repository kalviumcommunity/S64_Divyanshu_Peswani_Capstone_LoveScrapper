const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  mediaURL: String,
  type: {
    type: String,
    enum: ['photo', 'video', 'audio'],
    required: true,
  },
  tags: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, { timestamps: true });

module.exports = mongoose.model('Memory', MemorySchema);
