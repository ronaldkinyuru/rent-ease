require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

//register user

exports.registerUser = async (req, res) => {
	const { email, phone_number, full_name, password } = req.body;
	try { 
		//check if user exists
		const { data: existingUser } = await supabase
			.from('users')
			.select('*')
			.eq('email', email)
			.single();

		if (existingUser) return res.status(400).json({ message: 'User already exists'});
		
		if (!email || !phone_number || !full_name || !password) {
			return res.status(400).json({ message: " All fields required" });
		}

		//hash pass
		const hashedPassword = await bcrypt.hash(password, 10);

		//create user
		const { error } = await supabase
			.from('users')
			.insert({ email, phone_number, full_name, password: hashedPassword });
		
		if (error) throw error;

		res.status(201).json({ message: 'User registered successfully'});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
