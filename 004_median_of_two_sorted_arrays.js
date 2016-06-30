/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    var cnt = nums1.length + nums2.length;
    if (cnt % 2 === 0) {
        return (findNth(nums1, nums2, parseInt(cnt / 2)) +
            findNth(nums1, nums2, parseInt(cnt / 2) + 1)) / 2;
    } else {
        return findNth(nums1, nums2, parseInt(cnt / 2) + 1);
    }
};

var findNth = function(nums1, nums2, nth) {
    if (nums1.length > nums2.length) {
        return findNth(nums2, nums1, nth);
    }

    if (nums1.length === 0) {
        return nums2[nth - 1];
    }
    if (nums2.length === 0) {
        return nums1[nth - 1];
    }
    if (nth === 1) {
        return Math.min(nums1[0], nums2[0]);
    }

    var pa = Math.min(parseInt(nth / 2), nums1.length);
    var pb = nth - pa;
    if (nums1[pa - 1] < nums2[pb - 1]) {
        return findNth(nums1.slice(pa), nums2, nth - pa);
    } else {
        return findNth(nums1, nums2.slice(pb), nth - pb);
    }
};

var assert = require("assert");
describe('Leetcode', function() {
    it('004 median of two sorted arrays', function() {
        assert.equal(2.0, findMedianSortedArrays([1, 3], [2]));
        assert.equal(2.5, findMedianSortedArrays([1, 2], [3, 4]));
    });
});
