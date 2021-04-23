/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    if (nums.includes(0)) return 0;
    let negSigns = 0;
    nums.map((num) => (num < 0 ? (negSigns += 1) : negSigns));
    let result = negSigns % 2 == 0 ? 1 : -1;
    return result;
};
