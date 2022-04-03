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
    this.ids = []
    this.ir = new IngredientRepository()
    this.createRecipes()
  }

  getAllIds() {
    return this.ids
  }

  createIds(recipe) {
    let id = recipe.id
    if (id) {
        if(!this.ids.includes(id)) {
          this.ids.push(id)
        }
        this.ids.sort()
    }
  }

  createRecipes() {
    this.data.forEach(recipe => {
      let newRecipe = new Recipe(recipe)
      this.createTags(newRecipe)
      this.createIds(newRecipe)
      this.createIngredients(newRecipe)
      newRecipe.updateCost()
      this.recipes.push(newRecipe)
    })
  }

  createIngredients(recipe) {
    let ingredientsData = recipe.ingredientsData;

    ingredientsData.forEach((ingredient, index) => {
      const id = recipe.ingredientsData[index].id;
      const amount = recipe.ingredientsData[index].quantity.amount;
      const unit = recipe.ingredientsData[index].quantity.unit;
      recipe.ingredients.push(this.ir.getIngredient(id, amount, unit))
    })
    recipe.updateCost()
  }

  createTags(recipe) {
    let tags = recipe.tags
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
    return this.recipes.find(recipe => {
      return recipe.id === id
    })
  }

  getAllRecipes() {
   return this.recipes
  }

  filterTag(tags, baseList) {
    let filteredList = this.filterList(baseList)
    return filteredList.filter(recipe => {
      let response = false
      tags.forEach(tag => {
        if (recipe.tags.includes(tag)) {
          response = true
        }
      })
      return response;
    })
  }

  filterList(list) {
    return this.recipes.filter(recipe => {
      return list.includes(recipe.id)
    })
  }

  filterName(name, baseList) {
    let filteredList = this.filterList(baseList)
    return filteredList.filter(recipe => {
      let response = false
      name.split(' ').forEach(word => {
        if (recipe.name.toLowerCase().includes(word.toLowerCase())) {
          response = true
        }
      })
      return response;
    })
  }
}
export default RecipeRepository;
