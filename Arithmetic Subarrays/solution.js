/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    let result = [];
    for (let i = 0; i < l.length; i++) {
        if (r[i] < l[i]) {
            result.push(false);
            continue;
        }
        if (r[i] === l[i]) {
            result.push(true);
            continue;
        }
        let temp = nums.slice(l[i], r[i] + 1);
        temp.sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
        let arithmatic = true;
        let sequence_diff = temp[1] - temp[0];
        for (let j = 2; j < temp.length; j++) {
            if (temp[j] - temp[j - 1] !== sequence_diff) {
                result.push(false);
                arithmatic = false;
                break;
            }
        }
        if (arithmatic) {
            result.push(true);
        }
    }
    return result;
};