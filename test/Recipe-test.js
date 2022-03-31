import { expect } from 'chai';
//Classes
import Ingredient from '../src/classes/Ingredient.js';
import IngredientRepository from '../src/classes/IngredientRepository.js';
import Recipe from'../src/classes/Recipe.js';
//Data
import recipesTestData from '../src/data/recipesTestData.js';

describe('Recipe', () => {

  let ir, recipe, ingredient1, ingredient2, ingredient3
  recipe = new Recipe(recipesTestData.recipesTestData[0])
  
  beforeEach(() => {
    ir = new IngredientRepository()
  })

    it('Should be a function', () => {
        expect(Recipe).to.be.a('function');
    });

    it('Should be an instance of recipe', () => {
        expect(recipe).to.be.instanceOf(Recipe)
    });

    it('Should store an id number', () => {
        expect(recipe.id).to.equal(595736)
    });

    it('Should store an image', () => {
      //UPdate wit.skiph image file!!!
        expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg")
    });

    it('Should store a list of ingredients', () => {
        expect(recipe.ingredients).to.be.an('array')
        expect(recipe.ingredientsData[0]).to.be.an('object')
    });

    it('Should store multiple ingredients', () => {
      expect(recipe.ingredientsData.length).to.equal(11)
    })

    it('Should store a list of instructions', () => {
      expect(recipe.instructions).to.be.an('array')
    })

    it('Should store multiple instructions', () => {
      expect(recipe.instructions.length).to.equal(6)
      expect(recipe.instructions[0]).to.be.an('object')
    })

    it('Should have a name', () => {
      expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups")
    })

    it('Should store an list of tags', () => {
      expect(recipe.tags).to.be.an('array')
    })

    it('Should store multiple tags', () => {
      expect(recipe.tags.length).to.equal(6)
      expect(recipe.tags[0]).to.be.a('string')
    })
// fix after updating recipe repo
    it.skip('Should have a method to return names of ingredients', () => {
      expect(recipe.getIngredientNames).to.equal('name')
    })

    it.skip('Should have a method to determine the cost of ingredients', () => {
      expect(recipe.getTotalCost).to.equal(99)
    })
    it('Should have method to return the instructions', () => {
      console.log(recipe.getInstructions())
      expect(recipe.getInstructions()[0]).to.deep.equal({
        step: 1,
        instruction: `In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.`
      })
    })

})
