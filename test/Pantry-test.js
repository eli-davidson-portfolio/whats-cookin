import { expect } from 'chai';
// //Classes
import User from '../src/classes/User.js';
import Pantry from '../src/classes/Pantry.js'
import Ingredient from '../src/classes/Ingredient.js';


describe('Pantry', () => {

    let user
    let pantry

    beforeEach(() => {
        user = new User({
            "name": "Saige O'Kon",
            "id": 1,
            "pantry": [
              {
                "ingredient": 11297,
                "amount": 4
              },
              {
                "ingredient": 1082047,
                "amount": 10
              },
              {
                "ingredient": 20081,
                "amount": 5
              },
              {
                "ingredient": 11215,
                "amount": 5
              },
              {
                "ingredient": 2047,
                "amount": 6
              },
              {
                "ingredient": 1123,
                "amount": 8
              },
              {
                "ingredient": 11282,
                "amount": 4
              },
              {
                "ingredient": 6172,
                "amount": 2
              },
              {
                "ingredient": 2044,
                "amount": 2
              },
              {
                "ingredient": 2050,
                "amount": 4
              },
              {
                "ingredient": 1032009,
                "amount": 3
              },
              {
                "ingredient": 5114,
                "amount": 3
              },
              {
                "ingredient": 1017,
                "amount": 2
              },
              {
                "ingredient": 18371,
                "amount": 7
              },
              {
                "ingredient": 1001,
                "amount": 6
              },
              {
                "ingredient": 99223,
                "amount": 2
              },
              {
                "ingredient": 1230,
                "amount": 2
              },
              {
                "ingredient": 9152,
                "amount": 4
              },
              {
                "ingredient": 10611282,
                "amount": 2
              },
              {
                "ingredient": 93607,
                "amount": 2
              },
              {
                "ingredient": 14106,
                "amount": 4
              },
              {
                "ingredient": 1077,
                "amount": 4
              },
              {
                "ingredient": 6150,
                "amount": 2
              },
              {
                "ingredient": 1124,
                "amount": 2
              },
              {
                "ingredient": 10011693,
                "amount": 4
              },
              {
                "ingredient": 1102047,
                "amount": 2
              },
              {
                "ingredient": 19206,
                "amount": 2
              },
              {
                "ingredient": 1145,
                "amount": 4
              },
              {
                "ingredient": 1002030,
                "amount": 4
              },
              {
                "ingredient": 12061,
                "amount": 2
              },
              {
                "ingredient": 19335,
                "amount": 4
              },
              {
                "ingredient": 15152,
                "amount": 3
              },
              {
                "ingredient": 9003,
                "amount": 2
              },
              {
                "ingredient": 18372,
                "amount": 3
              },
              {
                "ingredient": 2027,
                "amount": 2
              }
            ]
          })
    })

    it('Should be a function', () => {
        expect(Pantry).to.be.a('function');
    });

    it('Should be an instance of pantry', () => {
        expect(user.pantry).to.be.instanceOf(Pantry)
    });

    it('Should store an array of ingredients', () => {
        // console.log(user.pantry.ingredients)
        expect(user.pantry.ingredients).to.be.an("array")
      });

      it('Should store an array of ingredients that equals expected ingredient', () => {
        let newIngredients = user.getPantryItems()
        user.fillPantry(newIngredients)
        expect(user.pantry.ingredients[0]).to.deep.equal({ ingredient: 11297, amount: 4 })
      });

      it('Should determine if a user can cook a recipe', () => {
          let ingredientsArray= [] 
          ingredientsArray.push(new Ingredient(20081, "wheat flour", 142, 'serving', 1))
          ingredientsArray.push(new Ingredient(18372, "bicarbonate of soda", 582, 'serving', 1))
          ingredientsArray.push(new Ingredient(1123, "eggs", 472, 'serving', 1))
     

        expect(user.checkIngredients(ingredientsArray)).to.deep.equal([ 1, 1 ,1])
      })
})
