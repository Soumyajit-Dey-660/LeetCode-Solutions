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
var getDecimalValue = function (head) {
    let result = [];
    let traverse = function (node) {
        if (node) {
            result.push(node.val);
            traverse(node.next);
        }
        return;
    };
    traverse(head);
    return convertDecimalToBinary(result);
};

var convertDecimalToBinary = function (arr) {
    let binaryValue = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) binaryValue += Math.pow(2, arr.length - i - 1);
    }
    return binaryValue;
};
