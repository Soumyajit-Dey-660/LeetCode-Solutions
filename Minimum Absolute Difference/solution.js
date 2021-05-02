/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    let result = [];
    let minDiff = 10e6 + 7;
    arr.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    for (let i = 1; i < arr.length; i++) {
        minDiff = Math.abs(arr[i - 1] - arr[i]) < minDiff ? Math.abs(arr[i - 1] - arr[i]) : minDiff;
    }
    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i - 1] - arr[i]) === minDiff)
            result.push([arr[i - 1], arr[i]]);
    }
    return result;
};