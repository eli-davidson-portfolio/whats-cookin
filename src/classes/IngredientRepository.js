
//Classes
import Ingredient from './Ingredient.js';

class IngredientRepository {
    constructor(data = []) {
        this.data = data;
    }

    getIngredient(id, amount = 1, unit = 'serving') {
        if (!id || typeof (id) !== 'number') return;
        let { name, estimatedCostInCents } = this.data.find(ingredient => ingredient.id === id);
        return new Ingredient(id, name, estimatedCostInCents, unit, amount);
    }
}

export default IngredientRepository;
