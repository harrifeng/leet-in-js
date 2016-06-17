function ListNode(val) {
    this.val = val;
    this.next = null;
};

function getLinkFromArray(arr) {
    var dummy = new ListNode(-1);
    var cur = dummy;
    for (var i = 0; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return dummy.next;
};

function compareListNode(l1, l2) {
    if (l1 === null && l2 === null) {
        return true;
    }
    if (l1 === null || l2 === null) {
        return false;
    }
    return (l1.val == l2.val && compareListNode(l1.next, l2.next));
};

exports.ListNode = ListNode;
exports.getLinkFromArray = getLinkFromArray;
exports.compareListNode = compareListNode;
