import { expect } from 'chai';
//Classes
import Ingredient from '../src/classes/Ingredient.js';
import Recipe from'../src/classes/Recipe.js';
// import RecipeRepository from'../src/classes/RecipeRepository.js';
// import User from'../src/classes/User.js';
// import Pantry from'../src/classes/Pantry.js';
// import GroceryList from'../src/classes/GroceryList.js';
// import FavoriteList from'../src/classes/FavoriteList.js';
// import ToCookList from'../src/classes/ToCookList.js';
//Data
//import ingredients from'../src/data/ingredients.js';
import recipes from '../src/data/recipes.js';
//import users from'../src/data/users.js';


describe('Recipe', () => {

  let ir, recipe, ingredient1, ingredient2, ingredient3
  //recipe = new Recipe(recipes[0])
  // beforeEach(() => {
  //   ir = new IngredientRepository()
  //   ingredient1 = ir.getIngredient(20081)
  //   ingredient1.updateAmount(1.5)
  //   ingredient1.updateUnit('c')
  //   ingredient2 = ir.getIngredient(18372)
  //   ingredient2.updateAmount(0.5)
  //   ingredient2.updateUnit('tsp')
  //   ingredient3 = ir.getIngredient(1123)
  //   ingredient3.updateAmount(1)
  //   ingredient3.updateUnit('large')
  // })

    it.skip('Should be a function', () => {
        expect(Recipe).to.be.a('function');
    });

    it.skip('Should be an instance of recipe', () => {
        expect(recipe).to.be.instanceOf(Recipe)
    });

    it.skip('Should store an id number', () => {
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
