/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.push(1);
    // nums.length is incremented by 1 so we want to iterate till
    // nums.length-1
    for (let i = 0; i < nums.length - 1; i++) {
        let index = Math.abs(nums[i]);
        nums[index] = -Math.abs(nums[index]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return i;
    }
    return nums.indexOf(0);
};