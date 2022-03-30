import { expect } from 'chai';
//Classes
const Ingredient = require('../src/classes/Ingredient.js');
const Recipe = require('../src/classes/Recipe.js');
const RecipeRepository = require('../src/classes/RecipeRepository.js');
const IngredientRepository = require('../src/classes/IngredientRepository.js');
const User = require('../src/classes/User.js');
const Pantry = require('../src/classes/Pantry.js');
const GroceryList = require('../src/classes/GroceryList.js');
const FavoriteList = require('../src/classes/FavoriteList.js');
const ToCookList = require('../src/classes/ToCookList.js');
//Data
const ingredients = require('../src/data/ingredients.js');
const recipes = require('../src/data/recipes.js');
const users = require('../src/data/users.js');


describe('IngredientRepository', () => {
    let ir

    beforeEach(() => {
        ir = new IngredientRepository()
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
        let start = ir.getIngredient(18069)
        result.updateAmount(6)
        result.updateUnit('slices')
        expect(result.id).to.equal(18069);
        expect(result.name).to.equal('gluten-free white sandwich bread');
        expect(result.amount).to.equal(6);
        expect(result.unit).to.equal('slices');
        expect(result.estimatedCostInCents).to.equal(5178);
    });


})
