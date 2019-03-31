const assert = require('assert');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const Burrito = require('../models/burrito');

describe('sanity check', () => {
    it('should be 2', () => {
        assert.equal(2, 1 + 1);
        expect(1 + 1).to.equal(2);
    });
});

describe('burrito model', () => {
    it('should retrieve burrito by id', async () => {
        const burritoData = await Burrito.getById(3);
        console.log(burritoData);
        expect(burritoData).to.be.an.instanceOf(Burrito);
    });
    it('should be able to retrieve a burrito heat by id', async() =>  {
        const burritoHeat = await Burrito.getById(1);
        console.log(burritoHeat.heat);
        expect(burritoHeat.heat).to.equal('lava')
    });
    it('should be able to retrieve all orders', async () => {
        const allBurritoOrders = await Burrito.getAll();
        expect(allBurritoOrders).to.be.an.instanceOf(Array);
    });

});  