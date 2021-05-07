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
var reverseList = function (head) {
    if (!head) return head;
    let prev = null;
    let curr = head;
    let next_p = curr.next;
    while (curr.next) {
        curr.next = prev;
        prev = curr;
        curr = next_p;
        next_p = next_p.next;
    }
    curr.next = prev;
    head = curr;
    return head;
};