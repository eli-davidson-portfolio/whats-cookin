import { expect } from 'chai';
// //Classes
import User from '../src/classes/User.js'

describe('Users', () => {

    let user = new User()
    
    beforeEach(() => {
        user = new User()
    })
  
      it('Should be a function', () => {
          expect(User).to.be.a('function');
      });
  
      it('Should be an instance of recipe', () => {
          expect(user).to.be.instanceOf(User)
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
