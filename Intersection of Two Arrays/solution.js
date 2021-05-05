/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let firstSet = new Set(nums1);
    let secondSet = new Set(nums2);
    return [...firstSet].filter(nums => secondSet.has(nums));
};