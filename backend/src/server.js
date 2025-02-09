const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const propertyRoutes = require('./routes/property');

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api', propertyRoutes);

//startserver
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
