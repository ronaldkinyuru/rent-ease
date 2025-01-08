require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');


const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

//addproperty
exports.addProperty = async (req, res) => {
	const { description, location, price, status} = req.body;
	const ownerId = req.user.id;

	try {
		const { error } = await supabase
		.from('properties')
		.insert({
			owner_id: ownerId,
			title,
			description,
			location,
			price,
			status,
		});
		if (error) throw error;

		res.status(201).json({ message: 'Property added successfully' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}

};

//get properties 
exports.getProperties = async (req, res) => {
	try {
		const { data:properties, error } = await supabase.from('properties').select('*');
		if (error) throw error;

aconst express = require('express');
const {
  addProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty
} = require('../controllers/property'); // Ensure this path is correct

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/properties', authMiddleware, addProperty); // POST route for adding a property
router.get('/properties', getProperties); // GET all properties
router.get('/properties/:id', getPropertyById); // GET property by ID
router.put('/properties/:id', authMiddleware, updateProperty); // PUT to update property
router.delete('/properties/:id', authMiddleware, deleteProperty); // DELETE property

module.exports = router;

