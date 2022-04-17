
class Ingredient {
    constructor(id = 0, name = "error", estimatedCostInCents = 0, unit = "servings", amount = 1) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.unit = unit;
        this.estimatedCostInCents = estimatedCostInCents * amount || 0;
        this.estimatedCostInDollars = estimatedCostInCents * amount / 100
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getCost() {
        return this.estimatedCostInCents;
    }

    getUnit() {
        return this.unit;
    }

    getAmount() {
        return this.amount;
    }

    updateAmount(amount) {
        if (!amount || typeof (amount) !== 'number') return;
        this.amount = amount;
        return this.updateCost(amount);
    }

    updateName(name) {
        if (!name || typeof (name) !== 'string') return;
        this.name = name;
    }

    updateCost(amount) {
        console.log(amount)
        if (!amount || typeof (amount) !== 'number') return;
        this.estimatedCostInCents = this.getCost() * amount;
        this.estimatedCostInDollars = this.estimatedCostInCents / 100
        return "success"
    }

    updateUnit(unit) {
        if (!unit || typeof (unit) !== 'string') return;
        this.unit = unit;
    }

 };
 export default Ingredient;
