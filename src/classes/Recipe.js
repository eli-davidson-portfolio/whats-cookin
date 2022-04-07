
class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.ingredientsData = recipe.ingredients;
    this.ingredients = [];
    this.ingredientWords = [];
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.totalCost = 0;
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
    if (!this.ingredients.length) return;

    this.totalCost = this.ingredients.reduce((sum, ingredient) => {
      sum += ingredient.estimatedCostInCents;
      return sum;
    }, 0);

    this.totalCost = this.totalCost / 100;
    this.UpdateIngredientWords();
  }

  getIngredientWords() {
    return this.ingredientWords;
  }

  getIngredientNames() {
    if (!this.ingredients.length) return;
    return this.ingredients.map((ingredient) => {
      return ingredient.name;
    })
  }

  UpdateIngredientWords() {
    if (!this.ingredients.length) return;
    this.ingredients.forEach((ingredient) => {
      ingredient.name.split(' ').forEach(word => {
        if (!this.ingredientWords.includes(word)) {
          this.ingredientWords.push(word);
        }
      })
    })
    this.ingredientWords.sort();
  }
}
export default Recipe;
