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
        
    }
// take in an array of recipe ingredients and the quantity you need and return the qauntity that
// you are missing from your pantry for each ingredient
    evaluateIngredients(ingredients){
    return ingredients.map((ingredientOne) => {
        let ingredientTwo = this.findIngredientById(ingredientOne.id)
        if (!ingredientTwo) {
            var ingredientAmountNeeded = ingredientOne.amount
        } else {
            var ingredientAmountNeeded = ingredientOne.amount - ingredientTwo.amount
        }
       if (ingredientAmountNeeded < 0) {
           ingredientAmountNeeded = 0
       }
       return ingredientAmountNeeded
    })
    }
    ingredientsToCook() {
        // if (RecipeRepository.recipes.ingredients)
    }
    findIngredientById(ingredientOneId) {
        return this.ingredients.find((ingredientTwo) => {
            return ingredientTwo.id === ingredientOneId
        })
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
