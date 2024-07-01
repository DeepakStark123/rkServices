const path = require('path');
require('dotenv').config();

console.log('Current Directory:', path.resolve(__dirname));
console.log('MONGO_URI:', process.env.MONGO_URI);

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Database = require('./config/database'); // Import the Database class

// Import routes
const aadharRoutes = require('./routes/aadhar');
const emailRoutes = require('./routes/emailRoutes'); // Import email routes

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/aadhar', aadharRoutes);
app.use('/api', emailRoutes); // Add email routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
