import { expect } from 'chai';
//Classes
import IngredientRepository from '../src/classes/IngredientRepository.js';
// import Recipe from'../src/classes/Recipe.js';
// import RecipeRepository from'../src/classes/RecipeRepository.js';
// import User from'../src/classes/User.js';
// import Pantry from'../src/classes/Pantry.js';
// import GroceryList from'../src/classes/GroceryList.js';
// import FavoriteList from'../src/classes/FavoriteList.js';
// import ToCookList from'../src/classes/ToCookList.js';
// //Data
import ingredients from'../src/data/ingredients.js';
// import recipes from'../src/data/recipes.js';
// import users from'../src/data/users.js';


describe('IngredientRepository', () => {
    let ir

    beforeEach(() => {
        ir = new IngredientRepository(ingredients.ingredientsData)
    })

    it('Should be a function', () => {
        expect(IngredientRepository).to.be.a('function');
    });

    it('Should be an instance of ingredient repository', () => {
        expect(IngredientRepository).to.be.a('function');
    });

    it('Should store a data array', () => {
        expect(ir.data).to.be.an('array');
    });

    it('Should have a method to instantiate ingredient objects', () => {
      expect(ir.getIngredient).to.be.a('function')
    });

    it('Should have a method to return ingredients', () => {
        let result = ir.getIngredient(18069)
        result.updateAmount(6)
        result.updateUnit('slices')
        expect(result.id).to.equal(18069);
        expect(result.name).to.equal('gluten-free white sandwich bread');
        expect(result.amount).to.equal(6);
        expect(result.unit).to.equal('slices');
        expect(result.estimatedCostInCents).to.equal(5178);
    });


})
