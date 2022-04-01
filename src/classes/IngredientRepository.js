
//Classes
import Ingredient from './Ingredient.js';
//Data
import ingredients from'../data/ingredients.js';

class IngredientRepository {
    constructor(data = ingredients.ingredientsData) {
        this.data = data;
        this.newIngredient = {}
    }

    getIngredient(id) {
        let data = this.data.find(ingredient => ingredient.id === id)
        let formattedIngredient = new Ingredient(data.id, data.name, data.estimatedCostInCents)
        return formattedIngredient
    }
}

export default IngredientRepository;
