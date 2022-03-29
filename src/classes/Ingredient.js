//Classes
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

class Ingredient {
    constructor(id = 0, name = "error", estimatedCostInCents = 0, unit = "servings", amount = 1) {
        this.id = id
        this.name = name 
        this.estimatedCostInCents = estimatedCostInCents
        this.unit = unit
        this.amount = amount
        // One class to get you started!
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
    }
    updateName(name) {
        this.name = name
    }
    updateCost(cost) {
        this.estimatedCostInCents = cost
    }
 };

module.exports = Ingredient;