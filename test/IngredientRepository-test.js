import { expect } from 'chai';
//Classes
import IngredientRepository from '../src/classes/IngredientRepository.js';
// //Data
import ingredients from'../src/data/ingredients.js';


describe('IngredientRepository', () => {
    let ir

    beforeEach(() => {
        ir = new IngredientRepository(ingredients.ingredientsData)
    })

    it('Should be a function', () => {
        expect(IngredientRepository).to.be.a('function');
    });

    it('Should be an instance of ingredient repository', () => {
        expect(IngredientRepository).to.be.a('function');
    });

    it('Should store a data array', () => {
        expect(ir.data).to.be.an('array');
    });

    it('Should have a method to instantiate ingredient objects', () => {
      expect(ir.getIngredient).to.be.a('function')
    });

    it('Should have a method to return ingredients', () => {
        let result = ir.getIngredient(18069)
        result.updateAmount(6)
        result.updateUnit('slices')
        expect(result.id).to.equal(18069);
        expect(result.name).to.equal('Gluten-free white sandwich bread');
        expect(result.amount).to.equal(6);
        expect(result.unit).to.equal('slices');
        expect(result.estimatedCostInCents).to.equal(5178);
    });


})
