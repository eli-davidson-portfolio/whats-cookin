
class Recipe {
    constructor(recipe) {

      this.id = recipe.id
      this.name = recipe.name
      this.image = recipe.image
      this.ingredientsData = recipe.ingredients
      this.ingredients = []
      this.ingredientWords = []
      this.instructions = recipe.instructions
      this.tags = recipe.tags
      this.totalCost = 0
    }

    updateIngredients() {
      let data = this.ingredients.shift()
      this.ingredients.push()
    }

    getInstructions() {
      return this.instructions.map((instruction) => {
        return {
          step: instruction.number,
          instruction: instruction.instruction
      }
      })
    }
    updateCost() {
        this.totalCost = this.ingredients.reduce((sum, ingredient) => {
            sum += ingredient.estimatedCostInCents
            return sum
        }, 0)
        this.totalCost = this.totalCost / 100
        this.UpdateIngredientWords()
    }
    favorite() {
       if (!this.tags.includes('favorite')) this.tags.push('favorite')
    }
    unfavorite() {
        if (this.tags.includes('favorite')) this.tags.pop()
    }
    toCook() {
        if (!this.tags.includes('toCook')) this.tags.unshift('toCook')
     }
     notToCook() {
         if (this.tags.includes('toCook')) this.tags.shift()
     }
      getIngredientwords() {
        return this.ingredientWords
      }


     getIngredientNames() {
         return this.ingredients.map((ingredient) => {
             return ingredient.name
         })
     }
    UpdateIngredientWords() {
     this.ingredients.forEach((ingredient) => {
        ingredient.name.split(' ').forEach(word => {
          if (!this.ingredientWords.includes(word)) {
            this.ingredientWords.push(word)
          }
        })
      })
      this.ingredientWords.sort();
    }
}
export default Recipe;
