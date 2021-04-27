/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let countIndexMap = {};
    let auxiliary = [];
    let result = [];
    mat.map((row, index) => countIndexMap[index] = row.reduce((a, b) => a + b, 0));
    for (key in countIndexMap) {
        auxiliary.push([key, countIndexMap[key]]);
    }
    auxiliary.sort((a, b) => {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        return 0;
    });
    for (let i = 0; i < k; i++) {
        result.push(auxiliary[i][0]);
    }
    return result;
};