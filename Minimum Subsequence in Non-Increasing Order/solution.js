/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    if (nums.length === 1) return nums;
    let result = [];
    let currentTotal = 0;
    let lastIndex = 1;
    let totalSum = nums.reduce((a, b) => a + b, 0);
    nums.sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });
    for (let i = 0; i < nums.length - 1; i++) {
        currentTotal += nums[i];
        if (currentTotal > totalSum - currentTotal) {
            lastIndex = i;
            break;
        }
    }
    for (let i = 0; i <= lastIndex; i++) {
        result.push(nums[i]);
    }
    return result;
};