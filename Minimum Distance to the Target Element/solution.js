/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
    let searchLeft = -1;
    let searchRight = -1;
    // Search in left side of start
    for (let i = 0; i < start + 1; i++) {
        // don't break from loop because if target exists in later portion 
        // of array then abs(searchLeft-start) will be minimized
        if (nums[i] === target) searchLeft = i;
    }
    // Search in right side of start
    for (let i = start; i < nums.length; i++) {
        if (nums[i] === target) {
            searchRight = i;
            break;
            // break from loop because if target exists in later portion of
            // array then abs(searchRight - start) will be maximized
        }
    }
    const minLeft = searchLeft === -1 ? nums.length : start - searchLeft;
    const minRight = searchRight === -1 ? nums.length : searchRight - start;
    return minRight <= minLeft ? minRight : minLeft;
};