/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let node = head;
    let totalLength = 0;
    let half = [];
    while (node) {
        node = node.next;
        totalLength += 1;
    }
    node = head;
    for (let i = 0; i < Math.floor(totalLength / 2); i++) {
        half.push(node.val);
        node = node.next;
    }
    if (totalLength % 2 !== 0) node = node.next;
    half.reverse();
    for (let i = 0; i < Math.floor(totalLength / 2); i++) {
        if (node.val !== half[i]) return false;
        node = node.next;
    }
    return true;
};