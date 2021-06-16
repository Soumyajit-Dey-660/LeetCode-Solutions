/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let node = head;
    let totalLength = 0;
    while (node) {
        node = node.next;
        totalLength++;
    }
    node = head;
    for (let i = 0; i < k - 1; i++) {
        node = node.next;
    }
    let firstNode = node;
    node = head;
    for (let i = 0; i < totalLength - k; i++) {
        node = node.next;
    }
    let temp = node.val;
    node.val = firstNode.val;
    firstNode.val = temp;
    return head;
};