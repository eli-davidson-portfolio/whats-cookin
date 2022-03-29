import { expect } from 'chai';
//Classes
const Ingredient = require('../src/classes/Ingredient.js');
const Recipe = require('../src/classes/Recipe.js');
const RecipeRepository = require('../src/classes/RecipeRepository.js');
const User = require('../src/classes/User.js');
const Pantry = require('../src/classes/Pantry.js');
const GroceryList = require('../src/classes/GroceryList.js');
const FavoriteList = require('../src/classes/FavoriteList.js');
const ToCookList = require('../src/classes/ToCookList.js');
//Data
const ingredients = require('../src/data/ingredients.js');
const recipes = require('../src/data/recipes.js');
const users = require('../src/data/users.js');

describe('ToCookList', () => {
    it('Should be a function', () => {
        expect(ToCookList).to.be.a('function');
    });
})