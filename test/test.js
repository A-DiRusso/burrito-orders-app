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