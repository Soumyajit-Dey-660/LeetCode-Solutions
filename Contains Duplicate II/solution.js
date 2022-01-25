/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let lookUp = {};
    for (let i = 0; i < nums.length; i++) {
        if (lookUp[nums[i]] === undefined) {
            lookUp[nums[i]] = i;
        } else {
            if (i - lookUp[nums[i]] <= k) {
                return true;
            }
            lookUp[nums[i]] = i;
        }
    }
    return false;
};