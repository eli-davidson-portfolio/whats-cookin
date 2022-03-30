import { expect } from 'chai';
//Classes
const Ingredient = require('../src/classes/Ingredient.js');
const IngredientRepository = require('../src/classes/IngredientRepository.js');
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

describe('Recipe', () => {

  let ir, recipe, ingredient1, ingredient2, ingredient3
  beforeEach(() => {
    ir = new IngredientRepository()
    ingredient1 = ir.getIngredient(20081)
    ingredient1.updateAmount(1.5)
    ingredient1.updateUnit('c')
    ingredient2 = ir.getIngredient(18372)
    ingredient2.updateAmount(0.5)
    ingredient2.updateUnit('tsp')
    ingredient3 = ir.getIngredient(1123)
    ingredient3.updateAmount(1)
    ingredient3.updateUnit('large')
    recipe = new Recipe()
  })

    it('Should be a function', () => {
        expect(Recipe).to.be.a('function');
    });

    it('Should be an instance of recipe', () => {
        expect(recipe).to.be.instanceOf(Recipe)
    });

    it('Should store an id number', () => {
        expect(recipe.id).to.equal(1)
    });

    it.skip('Should store an image', () => {
      //UPdate wit.skiph image file!!!
        expect(recipe.image).to.equal('image')
    });

    it.skip('Should store a list of ingredients', () => {
        expect(recipe.ingredients).to.be.an('array')
        expect(recipe.ingredients[0]).to.be.an.instanceof(Ingredient)
    });

    it.skip('Should store multiple ingredients', () => {
      expect(recipe.ingredients.length).to.equal(3)
    })

    it.skip('Should store a list of instructions', () => {
      expect(recipe.instructions).to.be.an('array')
    })

    it.skip('Should store multiple instructions', () => {
      expect(recipe.instructions.length).to.equal(3)
      expect(recipe.instructions[0]).to.be.an('object')
    })

    it.skip('Should have a name', () => {
      expect(recipe.name).to.equal(name)
    })

    it.skip('Should store an list of tags', () => {
      expect(recipe.tags).to.be.an('array')
    })

    it.skip('Should store multiple tags', () => {
      expect(recipe.tags.length).to.equal(3)
      expect(recipe.tags[0]).to.be.a('string')
    })

    it.skip('Should have a method to update ingredient name', () => {
//undecided
    })

    it.skip('Should have a method to return names of ingredients', () => {
      expect(recipe.getIngredientName).to.equal('name')
    })

    it.skip('Should have a method to determine the cost of ingredients', () => {
      expect(recipe.getTotalCost).to.equal(99)
    })

    it.skip('Should have method to return the instructions', () => {
      expect(recipe.getInstructions).to.deep.equal('array')
    })

})
