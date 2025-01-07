const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

//startserver
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
