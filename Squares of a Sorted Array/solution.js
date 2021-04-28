/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let sortedArr = [];
    let negativePointer;
    let positivePointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) positivePointer++;
        else break;
    }
    negativePointer = positivePointer - 1;
    while (negativePointer >= 0 && positivePointer < nums.length) {
        if (nums[negativePointer] * nums[negativePointer] < nums[positivePointer] * nums[positivePointer]) {
            sortedArr.push(nums[negativePointer] * nums[negativePointer]);
            negativePointer--;
        } else {
            sortedArr.push(nums[positivePointer] * nums[positivePointer]);
            positivePointer++;
        }
    }
    while (negativePointer >= 0) {
        sortedArr.push(nums[negativePointer] * nums[negativePointer]);
        negativePointer--;
    }
    while (positivePointer < nums.length) {
        sortedArr.push(nums[positivePointer] * nums[positivePointer]);
        positivePointer++;
    }
    return sortedArr;
};