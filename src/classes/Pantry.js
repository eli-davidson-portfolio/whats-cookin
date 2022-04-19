// //Classes
import RecipeRepository from "./RecipeRepository.js";

class Pantry {
  constructor() {
    this.ingredients = [];
  }

  evaluateIngredients(ingredients) {
    return ingredients.map((amountWeNeed) => {
      let amountWeHave = this.findIngredientById(amountWeNeed.id);
      var amountToOrder = amountWeNeed.amount - amountWeHave.amount;
      if (amountToOrder < 0) {
        amountToOrder = 0;
      }
      return {
        name: amountWeNeed.name,
        amount: amountToOrder,
        id: amountWeNeed.id,
      };
    });
  }

  addIngredient(ingredientID, ingredientModification) {
    let ingredient = this.ingredients.find((ingredient) => {
      return ingredient.id === ingredientID;
    });
    if (ingredient) {
      let have = ingredient.amount;
      let add = ingredientModification;
      ingredient.updateAmount(have + add);
    }
    if (!ingredient) {
      this.addIngredientObjects(ingredientObject);
    }
  }

  reduceIngrendientAmount(ingredientId, ingredientModification) {
    if (!ingredientId) {
      return;
    }
    let ingredient = this.ingredients.find((ingredient) => {
      return ingredient.id === ingredientId;
    });
    if (ingredient) {
      ingredient.reduceAmount(ingredientModification);
    }
  }

  findIngredientById(ingredientOneId) {
    return this.ingredients.find((ingredientTwo) => {
      return ingredientTwo.id === ingredientOneId;
    });
  }

  addIngredientObjects(pantryIngredients) {
    pantryIngredients.forEach((ingredient) => {
      this.ingredients.push(ingredient);
    });
  }
}

export default Pantry;
