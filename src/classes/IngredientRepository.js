
//Classes
const Ingredient = require('./Ingredient.js');
const Recipe = require('./Recipe.js');
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

class IngredientRepository {
    constructor(data = ingredients) {
        this.data = data;
    }

    getIngredient(id) {
        let data = this.data.find(ingredient => ingredient.id === id)
        return new Ingredient(data.id, data.name, data.estimatedCostInCents)
    }
}

module.exports = IngredientRepository;
