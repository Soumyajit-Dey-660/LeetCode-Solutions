/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let maxFrom = function (index, arr) {
        let max = arr[index];
        for (let i = index + 1; i < arr.length; i++) {
            max = arr[i] > max ? arr[i] : max;
        }
        return max;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = maxFrom(i + 1, arr);
    }
    arr[arr.length - 1] = -1;
    return arr;
};