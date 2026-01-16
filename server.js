require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
app.use(express.json()); // Middleware to parse JSON [cite: 16]

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Recipe API! Go to /api/recipes to see the data.');
});
app.use('/api/recipes', recipeRoutes);

// Database Connection [cite: 15]
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server running on port ${process.env.PORT || 5000}`);
        });
    })
    .catch(err => console.log(err));