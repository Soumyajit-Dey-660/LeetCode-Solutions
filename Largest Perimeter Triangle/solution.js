/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a);
    let largest = nums[0];
    let mid = nums[1];
    let smallest = nums[2];
    if (smallest + mid > largest) return smallest + mid + largest;
    for (let i = 3; i < nums.length; i++) {
        largest = mid;
        mid = smallest;
        smallest = nums[i];
        if (smallest + mid > largest) return smallest + mid + largest;
    }
    return 0;
};