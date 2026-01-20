require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
app.use(express.json());

// --- HARDCODED CONNECTION STRING (For Testing) ---
// We use the NEW password (render1234) and the database name (RecipesDB)
const MONGO_URI = "mongodb+srv://myUser:render1234@cluster0.ym57j9z.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅✅✅ SUCCESS: Connected to MongoDB! ✅✅✅"))
    .catch(err => console.error("❌❌❌ FAILURE: MongoDB Connection Error:", err));

// Routes
app.get('/', (req, res) => res.redirect('/api/recipes'));
app.use('/api/recipes', recipeRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});