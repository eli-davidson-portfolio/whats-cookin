//Classes

import IngredientRepository from './IngredientRepository.js';
import Recipe from'./Recipe.js';

class RecipeRepository {
  constructor(data = [], ingredientsData) {
    this.data = data
    this.recipes = []
    this.tags = []
    this.ids = []
    this.ir = new IngredientRepository(ingredientsData)
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
    let ingredientsData = recipe.ingredientsData.reduce((acc, ingredient) => {
      const id = ingredient.id;
      const amount = ingredient.quantity.amount;
      const unit = ingredient.quantity.unit;

      if (acc[id]) {
        acc[id].quantity.amount += amount;
        if (acc[id].quantity.unit.length < unit.length) {
          acc[id].quantity.unit = unit
        }  
      }
      if (!acc[id]) {
        acc[id] = {} 
        acc[id].id = id
        acc[id].quantity = {}
        acc[id].quantity.amount = amount;
        acc[id].quantity.unit = unit;
      }
      return acc
    }, {})

    let uniqueIngredients = Object.keys(ingredientsData).reduce((acc, key) => {
      acc.push(ingredientsData[key])
      return acc
    }, [])

    uniqueIngredients.forEach((ingredient) => {
      const id = ingredient.id;
      const amount = ingredient.quantity.amount;
      const unit = ingredient.quantity.unit;
      const ingredientPrototype = this.ir.getIngredient(id, amount, unit)
      recipe.ingredients.push(ingredientPrototype)
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
        if (recipe.name.toLowerCase().includes(word.toLowerCase()) || recipe.getIngredientwords().includes(word)) {
          response = true
        }
      })
      return response;
    })
  }
}
export default RecipeRepository;
