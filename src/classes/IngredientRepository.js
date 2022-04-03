
//Classes
import Ingredient from './Ingredient.js';

class IngredientRepository {
    constructor(data = {}) {
        this.data = data;
        this.newIngredient = {}
    }

    getIngredient(id, amount = 1, unit = 'serving') {
        if (!id) return
        if (typeof(id) === 'string') return
        let data = this.data.find(ingredient => ingredient.id === id)
        let formattedIngredient = new Ingredient(data.id, data.name, data.estimatedCostInCents)
        formattedIngredient.updateAmount(amount)
        formattedIngredient.updateUnit(unit)
        return formattedIngredient
    }
}

export default IngredientRepository;
