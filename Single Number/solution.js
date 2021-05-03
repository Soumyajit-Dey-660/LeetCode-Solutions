/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const nonDup = [...new Set(nums)]
    let doubleTotal = 0;
    nonDup.map(num => doubleTotal += num);
    doubleTotal *= 2;
    const sumNums = nums.reduce((a, b) => a + b, 0);
    return doubleTotal - sumNums;
};