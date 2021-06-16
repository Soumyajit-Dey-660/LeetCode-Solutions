/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) return null;
    var getLength = function (node) {
        var totalLength = 0;
        while (node) {
            node = node.next;
            totalLength += 1;
        }
        return totalLength;
    }
    let node1 = headA;
    let node2 = headB;
    let firstLength = getLength(node1);
    let secondLength = getLength(node2);
    if (firstLength > secondLength) {
        for (let i = 0; i < firstLength - secondLength; i++) {
            headA = headA.next;
        }
    } else if (secondLength > firstLength) {
        for (let i = 0; i < secondLength - firstLength; i++) {
            headB = headB.next;
        }
    }
    while (headA && headB) {
        if (headA === headB) return headA;
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};