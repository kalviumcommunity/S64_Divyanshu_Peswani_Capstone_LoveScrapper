const express = require('express');
const router = express.Router();
const { getMemories } = require('../controllers/memoryController');
router.get('/', getMemories);
module.exports = router;