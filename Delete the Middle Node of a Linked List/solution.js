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
 var deleteMiddle = function(head) {
    var getLength = head => {
        let totalLength = 0;
        while(head) {
            totalLength++;
            head = head.next;
        }
        return totalLength;
    }
    if (getLength(head) === 0 || getLength(head) === 1) {
        return null;
    }
    let curr = head;
    for (let i = 0; i < Math.floor(getLength(head) / 2) - 1; i++) {
        curr = curr.next;
    } 
    curr.next = curr.next.next;
    return head;
};