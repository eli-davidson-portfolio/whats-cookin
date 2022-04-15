import Pantry from './Pantry.js';

class User {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.pantryItems = data.pantry;
        this.currentCategory = 'All Recipes';
        this.currentList = 'allRecipes';
        this.favorites = [];
        this.recipesToCook = [];
        this.allRecipes = [];
        this.pantry = new Pantry()
        // console.log(this.pantry.ingredients)
    }
    fillPantry(pantryIngredients) {
        // console.log(pantryIngredients)
       this.pantry.addIngredientObjects(pantryIngredients)
    }

    checkIngredients(ingredients) {
        // console.log(ingredients)
      return this.pantry.evaluateIngredients(ingredients)
    }

    setCurrentList(listName, category) {
        this.currentCategory = category;
        this.currentList = listName;
    }

    updateAllRecipes(ids) {
      this.allRecipes = ids;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPantryItems() {
        return this.pantryItems;
    }

    getFavorites() {
        return  this.favorites;
    }

    getRecipesToCook() {
        return this.recipesToCook;
    }

    getPantryItemAmount(id) {
        if (!id || typeof (id) !== 'number') return;
        return this.pantryItems
        .filter((item) =>  item.ingredient == id )
        .reduce((sum, item) =>  sum += item.amount, 0);
    }

    addItemsToPantry(id, amount) {

    }

    removeItemsFromPantry(id, amount) {

    }

    addFavorite(id) {
        if (!id || typeof (id) !== 'number' || this.favorites.includes(id)) return;
        this.favorites.push(id);
    }

    removeFavorite(id) {
        if (!id || typeof (id) !== 'number' || !this.favorites.includes(id)) return;
        let index = this.favorites.indexOf(id);
        this.favorites.splice(index, 1);
    }

    addToCook(id) {
        if (!id || typeof (id) !== 'number' || this.recipesToCook.includes(id)) return;
        this.recipesToCook.push(id);
    }

    removeToCook(id) {
        if (!id || typeof (id) !== 'number' || !this.recipesToCook.includes(id)) return;
        let index = this.recipesToCook.indexOf(id);
        this.recipesToCook.splice(index, 1);
    }
}
export default User;
