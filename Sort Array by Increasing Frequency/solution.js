/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let result = [];
    let countMap = {};
    let sortable = [];
    let counter = 0;
    for (const num of nums) {
        if (countMap[num]) countMap[num] += 1;
        else countMap[num] = 1
    };
    for (const key in countMap) sortable.push([key, countMap[key]]);
    sortable.sort((a, b) => {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        return 0;
    });
    while (counter < sortable.length) {
        let temp = [];
        let freq = sortable[counter][1];
        while (counter < sortable.length) {
            if (sortable[counter][1] == freq) {
                temp.push(sortable[counter][0]);
                counter++;
            } else {
                break;
            }
        }
        temp.sort((a, b) => {
            return b - a;
        });
        for (const val of temp) {
            for (let i = 0; i < freq; i++) {
                result.push(val);
            }
        }
    }
    return result;
};