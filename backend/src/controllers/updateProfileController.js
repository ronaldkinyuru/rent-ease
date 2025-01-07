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
