/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let breakPoint = false;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            if (breakPoint) return false;
            breakPoint = true;
        }
    }
    if (breakPoint && nums[0] < nums[nums.length - 1]) return false;
    return true;
};