/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let firstPointer = 0;
    let secondPointer = 0;
    let maxConsecutiveOnes = 0;
    while(secondPointer < nums.length) {
        if (nums[firstPointer] === 1) {
            while (secondPointer < nums.length && nums[secondPointer] === 1) {
                secondPointer += 1;
            }
            let consecutiveOnes = secondPointer - firstPointer;
            maxConsecutiveOnes = consecutiveOnes > maxConsecutiveOnes ? consecutiveOnes : maxConsecutiveOnes;
            firstPointer = secondPointer;
        } else {
            firstPointer += 1;
            secondPointer += 1;
        }
    }
    return maxConsecutiveOnes;
};