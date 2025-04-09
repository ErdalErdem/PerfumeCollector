require('dotenv').config();

const express = require('express');
const perfumesRoutes = require('./routes/parfumes');
const mongoose = require('mongoose');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
    })

// routes
app.use('/api/perfumes/', perfumesRoutes);

// connect to mongodb & listen for requests
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
app.listen(process.env.PORT, () => {
    console.log('connected to DB & listening on port 4000!');
})
    })
    .catch(err => console.log(err));

// google docs updated



