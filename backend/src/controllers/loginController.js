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
