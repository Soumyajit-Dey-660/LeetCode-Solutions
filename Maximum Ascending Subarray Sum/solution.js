/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let maxSum = nums[0];
    let currSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currSum += nums[i];
        } else {
            maxSum = maxSum > currSum ? maxSum : currSum;
            currSum = nums[i];
        }
    }
    maxSum = maxSum > currSum ? maxSum : currSum;
    return maxSum;
};