/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let node = head;
    let lengthOfLL = 0;
    while (node) {
        node = node.next;
        lengthOfLL++;
    };
    node = head;
    for (let i = 0; i < Math.floor(lengthOfLL / 2); i++) {
        node = node.next;
    }
    return node;
};