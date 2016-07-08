/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var sign = 1;
    var ret = 0;
    var imin = Math.pow(-2, 31);
    var imax = Math.pow(2, 31) - 1;

    for (var i = 0; i < str.length; i++) {
        var cur = str[i];
        if (i === 0 && (cur === '+' || cur === '-')) {
            if (cur === '-') {
                sign = -1;
            }
        }
        else if (cur >= '0' && cur <= '9') {
            ret = ret * 10 + (cur - '0');
            if (ret * sign >= imax) {
                return imax;
            } else if (ret * sign <= imin) {
                return imin;
            }
        } else {
            break;
        }
    }
    return sign * ret;
};


var assert = require("assert");
describe('Leetcode', function() {
    it('008 string to integer atoi', function() {
        assert.equal(myAtoi("123"), 123);
        assert.equal(myAtoi("-123"), -123);
        assert.equal(myAtoi(""), 0);
        assert.equal(myAtoi("2147483648"), 2147483647);
        assert.equal(myAtoi("-2147483648"), -2147483648);
    });
});

