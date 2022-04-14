//Classes

import IngredientRepository from './IngredientRepository.js';
import Recipe from'./Recipe.js';

class RecipeRepository {
  constructor(data = [], ingredientsData) {
    this.data = data;
    this.recipes = [];
    this.tags = [];
    this.ids = [];
    this.ir = new IngredientRepository(ingredientsData);
    this.createRecipes();
  }

  createIds(recipe) {
    if (!recipe.id) return;

    if (!this.ids.includes(recipe.id)) {
      this.ids.push(recipe.id);
    }
    this.ids.sort();
  }

  createTags(recipe) {
    if (!recipe.tags) return;
    recipe.tags.forEach(tag => {
      if (!this.tags.includes(tag)) {
        this.tags.push(tag);
      }
    })
    this.tags.sort();
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

  getAllIds() {
    return this.ids;
  }

  getRecipeById(id) {
    if (!id) return;
    return this.recipes.find(recipe => {
      return recipe.id === id
    })
  }

  getRecipes(recipeIds, query, tags) {
    let recipes = this.filterList(recipeIds);

    if (!!query && !!tags){
      let queryWords = query.split(' ')
      return recipes.filter(recipe => {
        let name = recipe.name.toLowerCase()
        let ingredients = recipe.getIngredientWords().join().toLowerCase()
        return queryWords.some(word => name.includes(word) || ingredients.includes(word)) && tags.some(tag => recipe.tags.includes(tag));
      })
    }

    if (!!query && !tags) {
      let queryWords = query.toLowerCase().split(' ')
      return recipes.filter(recipe => {
        let name = recipe.name.toLowerCase()
        let ingredients = recipe.getIngredientWords().join().toLowerCase()
        return queryWords.some(word => name.includes(word) || ingredients.includes(word));
      })
    }
    
    if (!query, !!tags) {
      return recipes.filter(recipe => {
        return tags.some(tag => recipe.tags.includes(tag));
      })
    }

    return recipes;
  }

  filterList(list) {
    return this.recipes.filter(recipe => {
      return list.includes(recipe.id)
    })
  }
  getPantryItems(pantryItems) {
   let pantryObjects = []
   pantryItems.forEach((item) => {
      pantryObjects.push(this.ir.getIngredient(item.ingredient, item.amount))
    })
    return pantryObjects
  }

}
export default RecipeRepository;
