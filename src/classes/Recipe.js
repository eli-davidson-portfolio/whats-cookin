//Classes
const Ingredient = require('./Ingredient.js');
const RecipeRepository = require('./RecipeRepository.js');
const User = require('./User.js');
const Pantry = require('./Pantry.js');
const GroceryList = require('./GroceryList.js');
const FavoriteList = require('./FavoriteList.js');
const ToCookList = require('./ToCookList.js');
//Data
const ingredients = require('../data/ingredients.js');
const recipes = require('../data/recipes.js');
const users = require('../data/users.js');

class Recipe {
    constructor(recipe) {
      this.id = recipe.id,
      this.image = recipe.image,
      this.ingredients = recipe.ingredients

        // One class to get you started!
    }
}

module.exports = Recipe;
