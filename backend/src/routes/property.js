const express = require('express');
const { addProperty, getProperties, getPropertyById, updateProperty, deleteProperty } = require('../controllers/property');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/properties', authMiddleware, addProperty); // Add property
router.get('/properties', getProperties); // Get all properties
router.get('/properties/:id', getPropertyById); // Get property by ID
router.put('/properties/:id', authMiddleware, updateProperty); // Update property
router.delete('/properties/:id', authMiddleware, deleteProperty); // Delete property

module.exports = router;
