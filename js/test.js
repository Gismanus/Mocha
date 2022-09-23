/* development function of raise to the power 'pow' */

// specification

describe('pow', function () {

    it('2 to the power of 3 is 8', function () {
        assert.equal(pow(2, 3), 8);
    });

    it('3 to the power of 3 is 27', function(){
        assert.equal(pow(3, 3), 27);
    });

});