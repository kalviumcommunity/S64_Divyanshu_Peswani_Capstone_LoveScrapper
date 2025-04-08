const express = require('express');
const router = express.Router();
const memoryController = require('../controllers/memoryController');
router.get('/', memoryController.getMemories);
router.post('/', memoryController.createMemory);
module.exports = router;

