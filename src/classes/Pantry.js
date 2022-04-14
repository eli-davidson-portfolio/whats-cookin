// //Classes
// import IngredientRepository from './IngredientRepository.js';
import RecipeRepository from './RecipeRepository.js';
// const Recipe = require('./Recipe.js');
// import User from './User.js';
// const GroceryList = require('./GroceryList.js');
// const FavoriteList = require('./FavoriteList.js');
// const ToCookList = require('./ToCookList.js');
// //Data
// const ingredients = require('../data/ingredients.js');
// const recipes = require('../data/recipes.js');
// const users = require('../data/users.js');
//
class Pantry {
    constructor() {
        this.ingredients = []
        console.log(this.ingredients)
    }
    ingredientsToCook() {
        
    }
    getMissingIngredients() {

    }
    getPantryIngredients() {
        
    }
    getRecipestoCook() {

    }
    getIngredientsNeeded() {

    }
    cookMeal() {

    }
    purchaseIngredients() {

    }
    addIngredientObjects(pantryIngredients) {
        // console.log(this.ingredients)
        pantryIngredients.forEach((ingredient) => {
            this.ingredients.push(ingredient)
        })
    }
}

export default Pantry;
