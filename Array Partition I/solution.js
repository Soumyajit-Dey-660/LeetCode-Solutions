/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let result = 0;
    nums.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0
    });
    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
        result += nums[2 * i] <= nums[2 * i + 1] ? nums[2 * i] : nums[2 * i + 1];
    }
    return result;
};