// @desc Create a new recipe
exports.createRecipe = async (req, res) => {
    // --- START VALIDATION ---
    const { title, ingredients, instructions, cookingTime } = req.body;

    if (!title || !ingredients || !instructions || !cookingTime) {
        return res.status(400).json({ message: "Validation Failed: Please provide title, ingredients, instructions, and cookingTime." });
    }
    // --- END VALIDATION ---
    
    try {
        const recipe = await Recipe.create(req.body);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};