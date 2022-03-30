//Classes
const Ingredient = require('./Ingredient.js');
const Recipe = require('./Recipe.js');
const User = require('./User.js');
const Pantry = require('./Pantry.js');
const GroceryList = require('./GroceryList.js');
const FavoriteList = require('./FavoriteList.js');
const ToCookList = require('./ToCookList.js');
//Data
const ingredients = require('../data/ingredients.js');
const recipes = require('../data/recipes.js');
const users = require('../data/users.js');
class RecipeRepository {
  constructor(data = recipes) {
    this.data = data
    this.recipes = []
    createRecipes()
  }
  createRecipes() {
    this.data.forEach(recipe => {
      this.recipes.push(new Recipe(recipe))
    })
  }
  getRecipes() {

  }
  filterTag() {

  }
  filterName() {

  }
}

module.exports = RecipeRepository;
