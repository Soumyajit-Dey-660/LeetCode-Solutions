/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let node = list1;
    for (let i = 0; i < a - 1; i++) {
        node = node.next;
    }
    let currentLink = node;
    for (let i = 0; i <= b - a + 1; i++) {
        currentLink = currentLink.next;
    }
    node.next = list2;
    while (node.next) {
        node = node.next;
    }
    node.next = currentLink;
    return list1;
};