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

describe('RecipeRepository', () => {
  let rr

  beforeEach(() => {
    rr = new RecipeRepository()
  })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of RecipeRepository', () => {
    expect(rr).to.be.an.instanceOf(RecipeRepository);
  });

  it('Should be able to store a data array', () => {
    expect(rr.data).to.be.an("array");
  });

  it('Should be a method to instantiate recipe objects', () => {
    expect(rr.createRecipe).to.be.an("function");
  });

  it('Should store an array of recipe objects', () => {
    expect(rr.recipes).to.be.an("array");
  });

  it('Should have a method to return recipes', () => {
    expect(rr.getRecipes).to.be.a("function");
  });

  it('Should be able to filter recipes by tag', () => {
    expect(rr.filterTag).to.be.a("function");
  });

  it('Should be able to filter recipes by name', () => {
    expect(rr.filterName).to.be.a("function");
  });
})