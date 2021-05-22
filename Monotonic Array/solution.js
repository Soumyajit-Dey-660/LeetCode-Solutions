/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let increasing = false;
    let decreasing = false;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        } else if (nums[i] > nums[i - 1]) {
            increasing = true;
            break;
        } else {
            decreasing = true;
            break;
        }
    }
    if (!decreasing && !increasing) return true;
    for (let i = 1; i < nums.length; i++) {
        if (increasing) {
            if (nums[i] < nums[i - 1]) return false;
        } else {
            if (nums[i] > nums[i - 1]) return false;
        }
    }
    return true;
};