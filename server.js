require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// Middleware
app.use(express.json());

// 1. Root Redirect (Corrected Place)
app.get('/', (req, res) => {
  res.redirect('/api/recipes');
});

// 2. Routes
app.use('/api/recipes', recipeRoutes);

// 3. Database Connection
// We move the listen command outside the .then() so the server starts immediately.
// This prevents Render from timing out during the "Health Check."
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB Connection Error:", err));

// 4. Start Server (Corrected for Render)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});