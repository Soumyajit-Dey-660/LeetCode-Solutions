/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxValueIndex = nums[0] > nums[1] ? 0 : 1;
    let secondMaxValueIndex = nums[0] <= nums[1] ? 0 : 1;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] >= nums[maxValueIndex]) {
            secondMaxValueIndex = maxValueIndex;
            maxValueIndex = i;
        } else if (nums[i] > nums[secondMaxValueIndex]) {
            secondMaxValueIndex = i;
        }
    }
    return (nums[maxValueIndex] - 1) * (nums[secondMaxValueIndex] - 1);
};
