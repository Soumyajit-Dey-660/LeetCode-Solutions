/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let evenArr = [];
    let oddArr = [];
    nums.map(num => num % 2 !== 0 ? oddArr.push(num) : evenArr.push(num));
    for (let i = 0; i < evenArr.length; i++) {
        nums[2 * i] = evenArr[i];
        nums[2 * i + 1] = oddArr[i];
    }
    return nums;
};