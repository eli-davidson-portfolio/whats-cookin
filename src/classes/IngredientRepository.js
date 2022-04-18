
//Classes
import Ingredient from './Ingredient.js';

class IngredientRepository {
    constructor(data = []) {
        this.data = data;
        this.ingredients = [];
        this.createIngredients();
    }

    createIngredients() {
      //console.log(this.data, 'test')
        this.data.forEach(item => {
            this.ingredients.push(new Ingredient(item.id, item.name, item.estimatedCostInCents))
        })
    }

    getIngredient1(id, amount = 1, unit = 'serving') {
        if (!id || typeof (id) !== 'number') return;
        let { name, estimatedCostInCents } = this.ingredients.filter(ingredient => ingredient.id === id);
        return new Ingredient(id, name, estimatedCostInCents, unit, amount);
    }

    getIngredient(id, amount = 1, unit = "serving") {

        if (!id || typeof (id) !== 'number') return;

        let { name, estimatedCostInCents } = this.data.find(ingredient => ingredient.id === id);
        return new Ingredient(id, name.charAt(0).toUpperCase() + name.slice(1), estimatedCostInCents, unit, amount);
    }
    getAllIngredientIds() {
        return this.ingredients.map((ingredient) => {
            return ingredient.id
        })
    }
}

export default IngredientRepository;
