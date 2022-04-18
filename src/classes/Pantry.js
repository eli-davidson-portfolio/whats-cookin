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
    return ingredients.map((amountWeNeed) => {
        let amountWeHave = this.findIngredientById(amountWeNeed.id)
        // if (!ingredientTwo) {
        //     var ingredientAmountNeeded = amountWeNeed.amount
        // } else {
            var amountToOrder = amountWeNeed.amount - amountWeHave.amount
            // }
            if (amountToOrder < 0) {
                amountToOrder = 0
            }
            console.log(amountWeNeed, 'need', amountWeHave, 'have', amountToOrder, 'toOrder')
       return {name: amountWeNeed.name, amount: amountToOrder, id: amountWeNeed.id}
    })
    }

    addIngredient(ingredientID, ingredientModification) {

        let ingredient = this.ingredients.find(ingredient => {
            return ingredient.id === ingredientID
        })
        if(ingredient) {
            let have = ingredient.amount
            let add = ingredientModification
            ingredient.updateAmount(have + add)
        }
        if(!ingredient) {

            this.addIngredientObjects(ingredientObject)
        }

    }

    reduceIngrendientAmount(ingredientId, ingredientModification) {
      if (!ingredientId) {
        return
      }
      let ingredient = this.ingredients.find(ingredient => {
          return ingredient.id === ingredientId
      })
      if(ingredient) {
          ingredient.reduceAmount(ingredientModification)
      }
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
