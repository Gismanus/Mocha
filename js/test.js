/* development function of raise to the power 'pow' */

// specification

describe('pow', function () {

    describe('raises x to the power of 3', function () {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} to the power of 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    it('for negative n returns NaN', function(){
        assert.isNaN(pow(2, -1));
    });
    it('for fractional n returns NaN', function(){
        assert.isNaN(pow(2, 1.5));
    });
    // ... other tests.
});