const express = require('express');
const { updateUserProfile, getUserProfile } = require('../controllers/profileController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

//fetch userprofile
router.get('/me', authMiddleware, getUserProfile);

//update
router.put('/me', authMiddleware, updateUserProfile);

module.exports = router;
