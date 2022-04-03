import { expect } from 'chai';
//Classes
import RecipeRepository from '../src/classes/RecipeRepository.js';
import Recipe from'../src/classes/Recipe.js';


describe('Recipe', () => {

  let recipe, rr
  
  beforeEach(() => {
    rr = new RecipeRepository()
    recipe = rr.recipes[0]
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

    it('Should have a method to return names of ingredients', () => {
      expect(recipe.getIngredientNames()[0]).to.equal('wheat flour')
    })

    it('Should have a method to determine the cost of ingredients', () => {
      recipe.updateCost()
      expect(recipe.totalCost).to.equal(177.76)
    })

    it('Should have method to return the instructions', () => {
      expect(recipe.getInstructions()[0]).to.deep.equal({
        step: 1,
        instruction: `In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.`
      })
    })

    it('Should have a method to favorite a recipe', () => {
        recipe.favorite()
        expect(recipe.tags.includes('favorite')).to.be.true
      })

      it('Should have a method to unfavorite a recipe', () => {   
        recipe.favorite()
        recipe.unfavorite()
        expect(recipe.tags.includes('favorite')).to.be.false
      })

      it('Should have a method to add toCook tag to a recipe', () => {
        recipe.toCook()
        expect(recipe.tags.includes('toCook')).to.be.true
      })

      it('Should have a method to remove toCook from a recipe', () => {   
        recipe.toCook()
        recipe.notToCook()
        expect(recipe.tags.includes('toCook')).to.be.false
      })
})
