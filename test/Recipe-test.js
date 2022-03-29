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

describe('Recipe', () => {

  let recipe, ingredient1, ingredient2, ingredient3
  beforeEach(() => {
    ingredient1 = new Ingredient()
    ingredient2 = new Ingredient()
    ingredient3 = new Ingredient()
      recipe = new Recipe(1, 'image', [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        }])

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

    it('Should store an image', () => {
      //UPdate with image file!!!
        expect(recipe.image).to.equal('image')
    });

    it('Should store a list of ingredients', () => {
        expect(recipe.ingredients).to.be.an('array')
        expect(recipe.ingredients[0]).to.be.an.instanceof(Ingredient)
    });

    it('Should store multiple ingredients', () => {
      expect(recipe.ingredients.length).to.equal(3)
    })

    it('Should store a list of instructions', () => {
      expect(recipe.instructions).to.be.an('array')
    })

    it('Should store multiple instructions', () => {
      expect(recipe.instructions.length).to.equal(3)
      expect(recipe.instructions[0]).to.be.an('object')
    })

    it('Should have a name', () => {
      expect(recipe.name).to.equal(name)
    })

    it('Should store an list of tags', () => {
      expect(recipe.tags).to.be.an('array')
    })

    it('Should store multiple tags', () => {
      expect(recipe.tags.length).to.equal(3)
      expect(recipe.tags[0]).to.be.a('string')
    })

    it.skip('Should have a method to update ingredient name', () => {
//undecided
    })

    it('Should have a method to return names of ingredients', () => {
      expect(recipe.getIngredientName).to.equal('name')
    })

    it('Should have a method to determine the cost of ingredients', () => {
      expect(recipe.getTotalCost).to.equal(99)
    })

    it('Should have method to return the instructions', () => {
      expect(recipe.getInstructions).to.deep.equal('array')
    })

})
