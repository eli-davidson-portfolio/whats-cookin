//Classes
import IngredientRepository from './IngredientRepository.js';
import Recipe from'./Recipe.js';
//Data
import recipes from'../data/recipes.js'
class RecipeRepository {
  constructor(data = recipes.recipeData) {
    this.data = data
    this.recipes = []
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
      this.recipes.push(newRecipe)
    })
  }
  getRecipes() {
   return this.recipes
  }
  filterTag(tag) {
    return this.recipes.filter(recipe => {
      recipe.tag.includes(tag)
    })
  }
  filterName(name) {
    return this.recipes.filter(recipe => {
      recipe.name.includes(name)
    })
  }
}
export default RecipeRepository;
