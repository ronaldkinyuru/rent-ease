const express = require('express');
const { addProperty, getProperties, updateProperty, deleteProperty,getPropertyById } = require('../controllers/propertiesController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/properties', authMiddleware, addProperty);
router.get('/properties', getProperties);
router.get('/properties/:id', getPropertyById);
router.put('/properties/:id', authMiddleware, updateProperty)
router.delete('/properties/:id', authMiddleware, deleteProperty)

module.exports = router;
