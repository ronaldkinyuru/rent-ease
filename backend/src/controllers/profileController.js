require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

exports.getUserProfile = async (req, res) => {
	const { id } = req.user;

	try {
		const { data: user, error } = await supabase 
		.from('users')
		.select('id, email, full_name, phone_number')
		.eq('id', id)
		.single();

		if (error) return res.status(404).json({ message: 'user profile not found'});

		res.status(200).json(user);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}

};

//updateuserprofile

exports.updateUserProfile = async (req, res) => {
	const { id } = req.user; //from jwt
	const { full_name, phone_number } = req.body;

	try {
		const { data: updatedUser, error } = await supabase 
			.from('users')
			.update({ full_name, phone_number })
			.eq('id', id)
			.select('id, email, full_name, phone_number')
			.single();

		if (error) return res.status(400).json({ message: 'Error updating Info'});

		res.status(200).json(updatedUser);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

