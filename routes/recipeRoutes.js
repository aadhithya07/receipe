const express = require('express');
const router = express.Router();
const { 
    createRecipe, 
    getAllRecipes, 
    getRecipeById, 
    updateRecipe, 
    deleteRecipe 
} = require('../controllers/recipeController');

router.post('/', createRecipe);          // POST /api/recipes
router.get('/', getAllRecipes);         // GET /api/recipes
router.get('/:id', getRecipeById);      // GET /api/recipes/:id
router.put('/:id', updateRecipe);       // PUT /api/recipes/:id
router.delete('/:id', deleteRecipe);    // DELETE /api/recipes/:id

module.exports = router;