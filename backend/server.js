// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const perfumeRoutes = require('./routes/perfumeRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/perfumes', perfumeRoutes);

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 4000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to DB & listening on port ${PORT}!`);
    });
}).catch((err) => {
    console.error('Failed to connect to DB', err);
});
