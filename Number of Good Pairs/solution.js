/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0;
  let countMap = {};
  for (let i = 0; i < nums.length; i++) {
    let iCount = countMap[nums[i]];
    if (iCount) {
      count += countMap[nums[i]];
      countMap[nums[i]] += 1;
    } else {
      countMap[nums[i]] = 1;
    }
  }
  return count;
};
