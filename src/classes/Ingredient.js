
class Ingredient {
    constructor(id = 0, name = "error", estimatedCostInCents = 0, unit = "servings", amount = 1) {
        this.id = id
        this.name = name
        this.amount = amount
        this.unit = unit
        this.estimatedCostInCents = estimatedCostInCents
    }
    getId() {
        return this.id
    }
    getName() {
        return this.name
    }
    getCost() {
        return this.estimatedCostInCents
    }
    getUnit() {
        return this.unit
    }
    getAmount() {
        return this.amount
    }
    updateAmount(amount) {
        this.amount = amount
        this.updateCost(amount)
    }
    updateName(name) {
        if(name) this.name = name
    }
    updateCost(amount) {
        this.estimatedCostInCents = this.getCost() * amount
    }
    updateUnit(unit) {
        if(unit) this.unit = unit
    }

 };
 export default Ingredient;

