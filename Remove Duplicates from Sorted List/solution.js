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
var deleteDuplicates = function (head) {
    if (head === null) return head;
    let currentNode = head;
    let nextNode = currentNode.next;
    while (nextNode) {
        if (currentNode.val != nextNode.val) {
            currentNode.next = nextNode;
            currentNode = nextNode;
            nextNode = nextNode.next;
        } else {
            nextNode = nextNode.next;
        }
    }
    currentNode.next = null;
    return head;
};