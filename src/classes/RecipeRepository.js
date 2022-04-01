//Classes
//import Ingredient from './Ingredient.js';
import IngredientRepository from './IngredientRepository.js';
import Recipe from'./Recipe.js';
// import RecipeRepository from'./RecipeRepository.js';
// import User from'./User.js';
// import Pantry from'./Pantry.js';
// import GroceryList from'./GroceryList.js';
// import FavoriteList from'./FavoriteList.js';
// import ToCookList from'./ToCookList.js';
//Data
//import ingredients from'./data/ingredients.js';
import recipes from'../data/recipes.js'
//console.log(recipes);
//import users from'./data/users.js';
class RecipeRepository {
  constructor(data = recipes.recipeData) {
    this.data = data
    this.recipes = []
    this.ir = new IngredientRepository()
    this.createRecipes()
    // console.log(this.ir, 'NEW INGREPO')
    // console.log(this.recipes)
  }

  createRecipes() {
    this.data.forEach(recipe => {
     let newRecipe = new Recipe(recipe)
    //  console.log(newRecipe)
    //  console.log(newRecipe.ingredients)
      newRecipe.ingredientsData.forEach((ingredient, index) => {
        let newIngredient = this.ir.getIngredient(newRecipe.ingredientsData[index].id)
        
        newIngredient.updateAmount(newRecipe.ingredientsData[index].quantity.amount)

        newIngredient.updateUnit(newRecipe.ingredientsData[index].quantity.unit)
        
        newRecipe.ingredients.push(newIngredient)
        // console.log(newIngredient, 'newIngredient')
      //  ingredient.id, ingredient.quantity.amount, ingredient.quantity.unit)
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
