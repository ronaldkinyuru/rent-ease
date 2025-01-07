const express = require('express');
const { updateUserProfile } = require('../controllers/updateProfileController');
const { getUserProfile } = require('../controllers/getProfileController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

//fetch userprofile
router.get('/me', authMiddleware, getUserProfile);

//update
router.put('/me', authMiddleware, updateUserProfile);

module.exports = router;
