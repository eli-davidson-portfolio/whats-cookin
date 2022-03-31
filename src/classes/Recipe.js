
class Recipe {
    constructor(recipe) {

      this.id = recipe.id
      this.name = recipe.name
      this.image = recipe.image
      this.ingredientsData = recipe.ingredients
      this.ingredients = []
      this.instructions = recipe.instructions
      this.tags = recipe.tags
      //this.updateIngredients()
    }

    updateIngredients() {
      let data = this.ingredients.shift()
      this.ingredients.push()
      console.log(data, ' DATA')
    }

    getInstructions() {
      return this.instructions.map((instruction) => {
        return {
          step: instruction.number,
          instruction: instruction.instruction
      }
      })
    }

}
export default Recipe;
