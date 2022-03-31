//Classes
//import Ingredient from './Ingredient.js';
import IngredientRepository from './IngredientRepository.js';
//import Recipe from'./Recipe.js';
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
    console.log(this.ir, 'NEW INGREPO')
  }

  createRecipes() {
    this.data.forEach(recipe => {
    //  let newRecipe = new Recipe(recipe)
      // newRecipe.ingredients.forEach((ingredient) => {
      //   let newIngredient = this.ir.getIngredient(ingredient.id)
      //   console.log(newIngredient, 'newIngredient')
      // //  ingredient.id, ingredient.quantity.amount, ingredient.quantity.unit)
      // })
      this.recipes.push()
    })
  }
  getRecipes() {

  }
  filterTag() {

  }
  filterName() {

  }
}
export default RecipeRepository;
