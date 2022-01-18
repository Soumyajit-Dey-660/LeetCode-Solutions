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
 var oddEvenList = function(head) {
    if (head === undefined || head === null) return null;
    if (head.next === undefined || head.next === null) return head;
    if (head.next.next === undefined || head.next.next === null) return head;
    let oddCurr = head;
    let evenCurr = head.next;
    let linkCurr = head.next;
    var getLength = head => {
        let totalLength = 0;
        let temp = head;
        while (temp !== null && temp !== undefined) {
            temp = temp.next;
            totalLength++;
        }
        return totalLength;
    }
    if (getLength(head) % 2 !== 0) {
        while (evenCurr.next.next !== undefined && evenCurr.next.next !== null) {
            oddCurr.next = oddCurr.next.next;
            evenCurr.next = evenCurr.next.next;
            oddCurr = oddCurr.next;
            evenCurr = evenCurr.next
        }
        oddCurr.next = oddCurr.next.next;
        evenCurr.next = null;
        oddCurr.next.next = linkCurr;
    } else {
        while (evenCurr.next !== undefined && evenCurr.next !== null) {
            oddCurr.next = oddCurr.next.next;
            evenCurr.next = evenCurr.next.next;
            oddCurr = oddCurr.next;
            evenCurr = evenCurr.next
        }
        evenCurr.next = null;
        oddCurr.next = linkCurr;
    }
    return head;
};