/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let countMap = {};
    let maxFreq = -1;
    for (const val of arr) {
        if (countMap[val]) countMap[val]++;
        else countMap[val] = 1;
    }
    for (const key in countMap) {
        if (key == countMap[key] && Number(key) > Number(maxFreq)) maxFreq = key;
    }
    return Number(maxFreq);
};