/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    for (let output = 0; output <= nums.length; output++) {
        let notSmall = 0;
        for (const num of nums) {
            if (num >= output) notSmall++;
        }
        if (notSmall === output) return output;
    }
    return -1;
};