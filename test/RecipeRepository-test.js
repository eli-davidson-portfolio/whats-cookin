import { expect } from 'chai';
//Classes
//import Ingredient from '../src/classes/Ingredient.js';
//import Recipe from'../src/classes/Recipe.js';
import RecipeRepository from '../src/classes/RecipeRepository.js';
// import User from'../src/classes/User.js';
// import Pantry from'../src/classes/Pantry.js';
// import GroceryList from'../src/classes/GroceryList.js';
// import FavoriteList from'../src/classes/FavoriteList.js';
// import ToCookList from'../src/classes/ToCookList.js';
//Data
// import ingredients from'../src/data/ingredients.js';
// import recipes from'../src/data/recipes.js';
// import users from'../src/data/users.js';

describe('RecipeRepository', () => {
  let rr

  // beforeEach(() => {
  rr = new RecipeRepository()
  // })

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
    expect(rr.createRecipes).to.be.an("function");
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
