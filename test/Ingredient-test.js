import { expect } from 'chai';
//Classes
const Ingredient = require('../src/classes/Ingredient.js');
const Recipe = require('../src/classes/Recipe.js');
const RecipeRepository = require('../src/classes/RecipeRepository.js');
const User = require('../src/classes/User.js');
const Pantry = require('../src/classes/Pantry.js');
const GroceryList = require('../src/classes/GroceryList.js');
const FavoriteList = require('../src/classes/FavoriteList.js');
const ToCookList = require('../src/classes/ToCookList.js');
//Data
const ingredients = require('../src/data/ingredients.js');
const recipes = require('../src/data/recipes.js');
const users = require('../src/data/users.js');

describe('Ingredient', () => {
    let ingredient
    beforeEach(() => {
        ingredient = new Ingredient(1, "Potatoe", 99)
    })

    it('Should be a function', () => {
        expect(Ingredient).to.be.a('function');
    });

    it('Should be an instance of ingedient', () => {
        expect(ingredient).to.be.instanceOf(Ingredient)
    });

    it('Should store a id number', () => {
        expect(ingredient.id).to.equal(1)
    });
        
    it('Should store a name string', () => {
        expect(ingredient.name).to.equal("Potatoe")
    })

    it('Should store a estimatedCostInCents number', () => {
        expect(ingredient.estimatedCostInCents).to.equal(99)
    });

    it('Should store a igredient unit string', () => {
        expect(ingredient.unit).to.equal("servings")
    });

    it('Should store a ingredient amount number', () => {
        expect(ingredient.amount).to.equal(1)
    });

    it('Should have a method to return id', () => {
        expect(ingredient.getId()).to.equal(1)
    })

    it('Should have a method to return name', () => {
        expect(ingredient.getName()).to.equal('Potatoe') 
    })

    it('Should have a method to return estimatedCostInCents', () => {
        expect(ingredient.getCost()).to.equal(99)
    })

    it('Should have a method to return ingredient unit', () => {
        expect(ingredient.getUnit()).to.equal("servings")
    })

    it('Should have a method to return ingredient amount', () => {
        expect(ingredient.getAmount()).to.equal(1)
    })

    it('Should have a method to update amount', () => {
        ingredient.updateAmount(2)
        expect(ingredient.getAmount()).to.equal(2)
    })
    // We may need another it block to update amount further

    it('Should be able to update the name', () => {
        ingredient.updateName("tomatoe")
        expect(ingredient.getName()).to.equal("tomatoe")
    })

    it('Should be able to update the estimatedCostInCents', () => {
        ingredient.updateCost(199)
        expect(ingredient.getCost()).to.equal(199)
    })
    console.log(ingredient)

});