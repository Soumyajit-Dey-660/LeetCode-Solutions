/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let countMap = {};
    for (const num of nums) {
        if (countMap[num]) return true;
        else countMap[num] = 1;
    }
    return false;
};