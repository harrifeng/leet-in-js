/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    var t = '^#' + s.split('').join('#') + '#$';
    var p = [];
    for (var i = 0; i < 3003; i++) {
        p.push(0);
    }

    var tmpc = 0;
    var tmpr = 0;
    var maxi = 0;
    var maxv = 0;

    for (var i = 1; i < t.length - 1; i++) {
        if (tmpr > i) {
            p[i] = Math.min(tmpr - i, p[2*tmpc - tmpr]);
        } else {
            p[i] = 1;
        }

        while (t[i + p[i]] == t[i - p[i]]) {
            p[i] += 1;
        }

        if (i + p[i] > tmpr) {
            tmpr = i + p[i];
            tmpc = i;
        }

        if (p[i] > maxv) {
            maxv = p[i];
            maxi = i;
        }
    }
    var start = parseInt(maxi/2) - parseInt(maxv/2);
    return s.slice(start, start + maxv - 1);
};

var assert = require("assert");
describe('Leetcode', function() {
    it('005 longest palindromic substring', function() {
        assert.equal("cc", longestPalindrome("ccd"));
        assert.equal("abccba", longestPalindrome("abccbaaaa"));
    });
});

