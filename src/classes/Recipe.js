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
    constructor(id = 0, image = 'no image', ingredients = []) {
      this.id = id,
      this.image = image,
      this.ingredients = ingredients  
    }
}

module.exports = Recipe;
