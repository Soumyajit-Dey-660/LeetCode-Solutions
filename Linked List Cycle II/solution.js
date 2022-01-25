/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if (head === null || head.next == null) {
        return null;
    }
    if (head.next === head) {
        return head;
    }
    let slow = head;
    let fast = head;
    slow = slow.next;
    fast = fast.next.next;
    let cycleExists = false;
    while (fast && fast.next) {
        if (slow === fast) {
            cycleExists = true;
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    if (!cycleExists) {
        return null;
    } 
    slow = head;
    while(slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};