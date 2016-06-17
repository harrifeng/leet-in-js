/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var assert = require("assert");
var util = require("./util.js");
var ListNode = util.ListNode;

var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(-1);
    var carry = 0;
    var cur = dummy;

    while (l1 != null || l2 != null || carry > 0) {
        var cnt = carry;
        if (l1 !== null) {
            cnt += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            cnt += l2.val;
            l2 = l2.next;
        }
        cur.next = new ListNode(parseInt(cnt % 10));
        carry = parseInt(cnt / 10);
        cur = cur.next;
    }
    return dummy.next;
};

describe('Leetcode', function() {
    it("002 add two numbers", function() {
        var a1 = util.getLinkFromArray([2, 4, 3]);
        var b1 = util.getLinkFromArray([5, 6, 4]);
        var r1 = addTwoNumbers(a1, b1);
        var e1 = util.getLinkFromArray([7, 0, 8]);
        assert.equal(true, util.compareListNode(r1, e1));
    });
});
