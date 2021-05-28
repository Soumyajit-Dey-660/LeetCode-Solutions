/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let countMap = {};
    let numsWithMostFreq = [];
    let maxValue = 0;
    let subArrLen = 50001;
    for (const num of nums) {
        if (countMap[num]) countMap[num]++;
        else countMap[num] = 1;
    }
    for (const key in countMap) {
        if (countMap[key] > maxValue) maxValue = countMap[key];
    }
    for (const key in countMap) {
        if (countMap[key] === maxValue) numsWithMostFreq.push(key);
    }
    for (const val of numsWithMostFreq) {
        let start = nums.indexOf(Number(val));
        let end = start;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == val) end = i;
        }
        if ((end - start + 1) < subArrLen) subArrLen = end - start + 1;
    }
    return subArrLen;
};