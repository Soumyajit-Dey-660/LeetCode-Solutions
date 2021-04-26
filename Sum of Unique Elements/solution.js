/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let map = {};
    let total = 0;
    nums.map(num => {
        if (map[num]) map[num] += 1;
        else map[num] = 1;
    });
    for (key in map) {
        if (map[key] === 1) total += Number(key);
    }
    return total;
};