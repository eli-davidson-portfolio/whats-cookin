
//Classes
import Ingredient from './Ingredient.js';
// import Recipe from'../src/classes/Recipe.js';
// import RecipeRepository from'../src/classes/RecipeRepository.js';
// import User from'../src/classes/User.js';
// import Pantry from'../src/classes/Pantry.js';
// import GroceryList from'../src/classes/GroceryList.js';
// import FavoriteList from'../src/classes/FavoriteList.js';
// import ToCookList from'../src/classes/ToCookList.js';
//Data
import ingredients from'../data/ingredients.js';
//import recipes from'../src/data/recipes.js';
//import users from'../src/data/users.js';

class IngredientRepository {
    constructor(data = ingredients.ingredientsData) {
        this.data = data;
        this.newIngredient = {}
    }

    getIngredient(id) {
        let data = this.data.find(ingredient => ingredient.id === id)
        let test = new Ingredient(data.id, data.name, data.estimatedCostInCents)
        return test
        console.log(test, 'FUUUUUUUUUCK')
    }
}

export default IngredientRepository;
