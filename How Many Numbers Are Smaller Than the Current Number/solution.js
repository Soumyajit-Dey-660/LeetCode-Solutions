/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let result = new Array(nums.length).fill(0);
  let numsBeforeSort = [...nums];
  nums.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  for (let i = 0; i < nums.length; i++) {
    result[i] = nums.indexOf(numsBeforeSort[i]);
  }
  return result;
};
