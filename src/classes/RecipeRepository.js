//Classes
import IngredientRepository from './IngredientRepository.js';
import Recipe from'./Recipe.js';
//Data
import recipes from'../data/recipes.js'
class RecipeRepository {
  constructor(data = recipes.recipeData) {
    this.data = data
    this.recipes = []
    this.tags = []
    this.ir = new IngredientRepository()
    this.createRecipes()
  }

  createRecipes() {
    this.data.forEach(recipe => {
     let newRecipe = new Recipe(recipe)

      newRecipe.ingredientsData.forEach((ingredient, index) => {
        let newIngredient = this.ir.getIngredient(newRecipe.ingredientsData[index].id)
        
        newIngredient.updateAmount(newRecipe.ingredientsData[index].quantity.amount)

        newIngredient.updateUnit(newRecipe.ingredientsData[index].quantity.unit)
        
        newRecipe.ingredients.push(newIngredient)
      })
      this.createTags(newRecipe.tags)
      newRecipe.updateCost()
      this.recipes.push(newRecipe)
    })
  }

  createTags(tags) {
    if (tags) {
      tags.forEach(tag => {
        if(!this.tags.includes(tag)) {
          this.tags.push(tag)
        }
        this.tags.sort()
      }) 
    }
  }
  


  getRecipeById(id) {
    console.log('id2', (typeof(id)))
    return this.recipes.find(recipe => {
      return recipe.id === id
    })
  }

  getAllRecipes() {
   return this.recipes
  }

  filterTag(tag) {
    return this.recipes.filter(recipe => {
      return recipe.tags.includes(tag)
    })
  }

  filterName(name) {
    return this.recipes.filter(recipe => {
      return recipe.name.includes(name)
    })
  }
}
export default RecipeRepository;
