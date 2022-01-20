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
 var nodesBetweenCriticalPoints = function(head) {
    let distances = [10e6+7, -1];
    if (!head.next.next) {
        return [-1, -1];
    }
    let temp = head.next;
    let lastValue = head.val;
    let pointer = 2;
    let firstPointer = false;
    let lastPointer = -1;
    while (temp.next) {
        // Local Maxima && Local Minima
        if ((lastValue < temp.val && temp.val > temp.next.val) ||
           (lastValue > temp.val && temp.val < temp.next.val)) {
            if (!firstPointer) {
                firstPointer = pointer;
                lastPointer = pointer;
            } else {
                distances[1] = pointer - firstPointer;
                distances[0] = (pointer - lastPointer) < distances[0] ?
                    (pointer - lastPointer) : distances[0];
                lastPointer = pointer;
            }
        }
        lastValue = temp.val;
        temp = temp.next;
        pointer++;
    }
    // If only one or less than one local maxima or local minima exists
    return ((!firstPointer && lastPointer === -1) || firstPointer === lastPointer) ?
        [-1, -1] : distances;
};