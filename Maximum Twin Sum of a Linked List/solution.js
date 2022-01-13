/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var pairSum = function(head) {
    let maximumPairSum = 0;
    let old = new ListNode();
    let left = head;
    let right = head.next;
    
    while (right.next) {
        right = right.next.next;
        let nxt = left.next;
        left.next = old;
        old = left
        left = nxt;
    }
    right = left.next;
    left.next = old;
    
    while (right) {
        maximumPairSum = Math.max(maximumPairSum, left.val + right.val);
        left = left.next;
        right = right.next;
    }
    return maximumPairSum;
};