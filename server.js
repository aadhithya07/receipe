require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
app.use(express.json());

// 1. Define Routes
app.get('/', (req, res) => {
  res.redirect('/api/recipes');
});
app.use('/api/recipes', recipeRoutes);

// 2. Connect to Database (Non-blocking)
// notice we removed the .then() wrapper around app.listen
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB Connection Error:", err));

// 3. Start Server IMMEDIATELY
// This tells Render "I am alive" right away, stopping the restart loop.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});