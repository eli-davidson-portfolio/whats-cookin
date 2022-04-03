// //Classes

// //Data
import users from '../data/users.js'

class User {
    constructor(data = users[0]) {
        this.id = data.id
        this.name = data.name
        this.pantryItems = data.pantry
        this.favorites = []
        this.recipesToCook = []
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
        console.log("new Favorite Added:", this.favorites)
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
        console.log("new to Cook Added:", this.recipesToCook)
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
