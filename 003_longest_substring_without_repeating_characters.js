/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var last = 0;
    var maxv = 0;
    var dict = {};

    for (var i = 0; i < s.length; i++) {
        if (dict.hasOwnProperty(s[i])) {
            last = Math.max(last, dict[s[i]] + 1);
        }
        maxv = Math.max(maxv, i - last + 1);
        dict[s[i]] = i;
    }
    return maxv;
};



var assert = require("assert");
describe('Leetcode', function() {
    it('003 longest substring without repeating characters', function() {
        assert.equal(3, lengthOfLongestSubstring("abcabcbb"));
    });
});
