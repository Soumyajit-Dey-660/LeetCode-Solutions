/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let firstSet = {};
    let secondSet = {};
    let result = [];
    for (const num of nums1) {
        if (firstSet[num]) firstSet[num]++;
        else firstSet[num] = 1;
    }
    for (const num of nums2) {
        if (secondSet[num]) secondSet[num]++;
        else secondSet[num] = 1;
    }
    for (const key in firstSet) {
        if (secondSet[key]) {
            let range = secondSet[key] <= firstSet[key] ? secondSet[key] : firstSet[key];
            for (let i = 0; i < range; i++) result.push(key);
        };
    }
    return result;
};