const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			return res.status(401).json({ message: 'Authorization token required' });
		}
		//extract token 
		const token = authHeader.split(' ')[1];

		//verify token with secret key
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		//user info

		req.user = {
			id: decoded.id,
		};

		next(); //procees to next middleware or route handler
	} catch (err) {
		return res.status(401).json({ message: 'invalid token'});
	}

};
