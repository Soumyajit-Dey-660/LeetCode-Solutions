/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) return head;
    let current = new ListNode(-1);
    let result = current;
    let nextNode = head;
    while (nextNode) {
        if (nextNode.val !== val) {
            current.next = nextNode;
            current = nextNode;
        }
        nextNode = nextNode.next;
    }
    if (current.val === -1) return null; // [7, 7, 7, 7], val = 7 -> current is never modified so return null
    current.next = nextNode;
    return result.next;
};