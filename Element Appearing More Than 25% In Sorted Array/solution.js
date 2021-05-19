/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    let curr = 1;
    let lastIndex = -1;
    let compare = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === compare) curr++;
        else {
            lastIndex = i;
            break;
        }
    }
    if (curr > Math.floor(arr.length / 4)) return compare;
    compare = arr[lastIndex];
    curr = 1;
    for (let i = lastIndex + 1; i < arr.length; i++) {
        if (arr[i] === compare) curr++;
        else {
            if (curr > Math.floor(arr.length / 4)) return compare;
            compare = arr[i];
            curr = 1;
        }
    }
    if (curr > Math.floor(arr.length / 4)) return compare;
};