/**
 * @param {string} s
 * @param {integer} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
    var ret = [];
    for (var i = 0; i < numRows; i++) {
        ret.push('');
    }

    var g = 2 * numRows - 2;

    for (var i = 0; i < s.length; i++) {
        var now = i % g;
        if (now < numRows) {
            ret[now] += s[i];
        } else {
            ret[g - now]  += s[i];
        }
    }
    return ret.join('');
};

var assert = require("assert");
describe('Leetcode', function() {
    it('006 zigzag', function() {
        assert.equal("PAHNAPLSIIGYIR", convert("PAYPALISHIRING", 3));
    });
});

