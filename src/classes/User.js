
class User {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.pantryItems = data.pantry
        this.currentCategory = 'All Recipes'
        this.currentList = 'allRecipes'
        this.favorites = []
        this.recipesToCook = []
        this.allRecipes = []
    }

    setCurrentList(listName, category) {
        this.currentCategory = category;
        this.currentList = listName;
    }

    updateAllRecipes(ids) {
      this.allRecipes = ids
    }
    getId() {
        return this.id
    }
    getName() {
        return this.name
    }
    getPantryItems() {
        return this.pantryItems
    }
    getFavorites() {
        return  this.favorites
    }
    getRecipesToCook() {
        return this.recipesToCook
    }
    getPantryItemAmount(id) {
        if (!id) return 'no id'
        if (typeof id === 'string') return "string"
        return this.pantryItems
        .filter((item) =>  item.ingredient == id )
        .reduce((sum, item) =>  sum += item.amount, 0)
    }
    addItemsToPantry(id, amount) {

    }
    removeItemsFromPantry(id, amount) {

    }
    addFavorite(id) {
        if (!id) return
        if (typeof(id) === 'string') return
        if (this.favorites.includes(id)) return
        this.favorites.push(id)
    }
    removeFavorite(id) {
        if (!id) return
        if (typeof(id) === 'string') return
        if (!this.favorites.includes(id)) return
        this.favorites.forEach((favorite, index) => {
            if (this.favorites[index] === id) {
                this.favorites.splice(index, 1)
            }
        })
    }
    addToCook(id) {
        if (!id) return
        if (typeof(id) === 'string') return
        if (this.recipesToCook.includes(id)) return
        this.recipesToCook.push(id)
    }
    removeToCook(id) {
        if (!id) return
        if (typeof(id) === 'string') return
        if (!this.recipesToCook.includes(id)) return
        this.recipesToCook.forEach((favorite, index) => {
            if (this.recipesToCook[index] === id) {
                this.recipesToCook.splice(index, 1)
            }
        })
    }
}
export default User;
