/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var nextLargerNodes = function(head) {
    if (head === null || head === undefined) return null;
    let result = [];
    let curr = head;
    while (curr.next) {
        let temp = curr.next;
        let greaterFound = false;
        while (temp) {
            if (temp.val > curr.val) {
                result.push(temp.val);
                greaterFound = true;
                break;
            }
            temp = temp.next;
        }
        if (!greaterFound) result.push(0);
        curr = curr.next;
    }
    result.push(0);
    return result;
};