// import Ingredient from '../src/classes/Ingredient.js';
// import Recipe from'../src/classes/Recipe.js';
// import RecipeRepository from'../src/classes/RecipeRepository.js';
// import User from'../src/classes/User.js';
// import Pantry from'../src/classes/Pantry.js';
// import GroceryList from'../src/classes/GroceryList.js';
// import FavoriteList from'../src/classes/FavoriteList.js';
// import ToCookList from'../src/classes/ToCookList.js';
// //Data
// import ingredients from'../src/data/ingredients.js';
// import recipes from'../src/data/recipes.js';
// import users from'../src/data/users.js';

class Ingredient {
    constructor(id = 0, name = "error", estimatedCostInCents = 0, unit = "servings", amount = 1) {
        this.id = id
        this.name = name
        this.amount = amount
        this.unit = unit
        this.estimatedCostInCents = estimatedCostInCents
        //One class to get you started!
    }
    getId() {
        return this.id
    }
    getName() {
        return this.name
    }
    getCost() {
        return this.estimatedCostInCents
    }
    getUnit() {
        return this.unit
    }
    getAmount() {
        return this.amount
    }
    updateAmount(amount) {
        this.amount = amount
        this.updateCost(amount)
    }
    updateName(name) {
        if(name) this.name = name
    }
    updateCost(amount) {
        this.estimatedCostInCents = this.getCost() * amount
    }
    updateUnit(unit) {
        if(unit) this.unit = unit
    }

 };
 export default Ingredient;
//module.exports = Ingredient;
