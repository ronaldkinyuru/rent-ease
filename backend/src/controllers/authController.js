require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// Register user
exports.registerUser = async (req, res) => {
    const { email, phone_number, full_name, password } = req.body;

    // Validate incoming data first
    if (!email || !phone_number || !full_name || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check if user exists
        const { data: existingUser } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const { error } = await supabase
            .from('users')
            .insert({ email, phone_number, full_name, password: hashedPassword });

        if (error) {
            throw error;
        }

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//login
exports.loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		//find user
		const { data: user, error } = await supabase
			.from('users')
			.select('*')
			.eq('email', email)
			.single();

		if (!user || error) return res.status(400).json({ message: 'Invalid email or password' });

		//compare password 
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

		//generate token
		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: '1h',
		});

		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
