/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
 var numComponents = function(head, nums) {
    let temp = head;
    let noOfComponents = 0;
    let chaining = false;
    while(temp) {
        if (nums.includes(temp.val) && !chaining) {
            chaining = true;
        } else if (!nums.includes(temp.val) && chaining) {
            chaining = false;
            noOfComponents++;
        }
        temp = temp.next; 
    }
    if (chaining) noOfComponents++;
    return noOfComponents;
};