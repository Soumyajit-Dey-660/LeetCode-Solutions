/**
 * @param {number[]} nums
 * @return {number}
 */
// O(1) Space
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);
    let curr = 1;
    let compare = nums[0];
    let lastIndex = -1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === compare) curr++;
        else {
            lastIndex = i;
            break;
        }
    }
    if (curr > Math.floor(nums.length / 2)) return compare;
    compare = nums[lastIndex];
    curr = 1;
    for (let i = lastIndex + 1; i < nums.length; i++) {
        if (nums[i] === compare) curr++;
        else {
            if (curr > Math.floor(nums.length / 2)) return compare;
            compare = nums[i];
            curr = 1;
        }
    }
    if (curr > Math.floor(nums.length / 2)) return compare;
};