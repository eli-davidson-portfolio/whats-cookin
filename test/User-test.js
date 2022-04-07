import { expect } from 'chai';
// //Classes
import User from '../src/classes/User.js'

describe('Users', () => {

    let user

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
        expect(User).to.be.a('function');
    });

    it('Should be an instance of recipe', () => {
        expect(user).to.be.instanceOf(User)
    });

    it('Should store an id number', () => {
      expect(user.id).to.be.a("number")
    });

    it('Should store a name string', () => {
      expect(user.name).to.be.a("string")
    });

    it('Should store an array of pantry items', () => {
      expect(user.pantryItems).to.be.a("array")
    });

    it('Should store and array of favorite recipes', () => {
      expect(user.favorites).to.be.an("array")
    });

    it('Should store and array of recipes to cook', () => {
      expect(user.recipesToCook).to.be.an("array")
    });

    it('Should have a method to return id', () => {
      expect(user.getId()).to.equal(1)
    });

    it('Should have a method to return name', () => {
        expect(user.getName()).to.be.equal("Saige O'Kon")
    });

    it('Should have a method to return pantry items', () => {
        expect(user.getPantryItems()).to.be.an('array')
        expect(user.getPantryItems()[0].ingredient).to.equal(11297)
    });

    it('Should have a method to return favorties', () => {
        user.addFavorite(12345)
        expect(user.getFavorites()[0]).to.equal(12345)
    });

    it('Should have a method to return recipes to cook', () => {
        user.addToCook(54321)
        expect(user.getRecipesToCook()[0]).to.equal(54321)
    });

    it('Should have a method to get the pantry item amount', () => {
        let result = user.getPantryItemAmount(1082047)
        expect(result).to.equal(10)
    });

    it('Should have a method to add and remove id from favorites array', () => {
        user.addFavorite(12345)
        expect(user.favorites.length).to.equal(1)
        expect(user.favorites[0]).to.equal(12345)
        user.removeFavorite(12345)
        expect(user.favorites.length).to.equal(0)
    });

    it('Should have a method to add and remove id from recipesToCook array', () => {
        user.addToCook(12345)
        expect(user.recipesToCook.length).to.equal(1)
        expect(user.recipesToCook[0]).to.equal(12345)
        user.removeToCook(12345)
        expect(user.recipesToCook.length).to.equal(0)
    });
});
