/**
 * @param {integer} x
 * @return {integer}
 */

var reverse = function(x) {
    var sign = 1;
    if (x < 0) {
        sign = -1;
    }
    x = Math.abs(x);
    var ret = 0;
    while (x > 0) {
        ret = ret * 10 + x % 10;
        x = parseInt(x / 10);
    }
    if (ret >= Math.pow(2, 31)) {
        return 0;
    }
    return sign * ret;
};

var assert = require("assert");
describe('Leetcode', function() {
    it('007 reverse integer', function() {
        assert.equal(321, reverse(123));
        assert.equal(-123, reverse(-321));
        assert.equal(0, reverse(Math.pow(2, 31)));
    });
});

