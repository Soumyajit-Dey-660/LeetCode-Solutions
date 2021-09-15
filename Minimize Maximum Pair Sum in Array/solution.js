/**
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
    nums.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    let maximumSum = 0;
    for (let i = 0; i < Math.floor(nums.length/2); i++) {
        if (maximumSum < nums[i] + nums[nums.length-i-1]) {
            maximumSum = nums[i] + nums[nums.length-i-1];
        }
    }
    return maximumSum;
};