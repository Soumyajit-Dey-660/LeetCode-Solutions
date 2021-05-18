/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let currOne = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currOne = i;
            break;
        }
    }
    if (currOne === -1) return true;
    for (let i = currOne + 1; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (i - currOne - 1 < k) return false;
            currOne = i;
        }
    }
    return true;
};