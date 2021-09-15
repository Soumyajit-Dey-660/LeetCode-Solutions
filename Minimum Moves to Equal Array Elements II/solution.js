/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves2 = function(nums) {
    nums.sort((a,b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    let isOdd = nums.length % 2 === 0 ? false : true;
    let result = 0;
    if (isOdd) {
        let medianValue = nums[Math.floor(nums.length/2)];
        for (let i = 0; i < Math.floor(nums.length/2); i++) {
            result += (medianValue - nums[i]) + (nums[nums.length-i-1] - medianValue);
        }
    } else {
        let floorSideValue = 0;
        let ceilSideValue = 0;
        let medianValue = nums[Math.floor(nums.length/2)];
        for (let i = 0; i < Math.floor(nums.length/2); i++) {
            floorSideValue += (medianValue - nums[i]) +
                (nums[nums.length-i-1] - medianValue);
        }
        medianValue = nums[Math.ceil(nums.length/2)];
        for (let i = 0; i < Math.ceil(nums.length/2); i++) {
            ceilSideValue += (medianValue - nums[i]) +
                (nums[nums.length-i-1] - medianValue);
        }
        result = floorSideValue < ceilSideValue ? 
            floorSideValue : ceilSideValue;
    }
    return result;
};