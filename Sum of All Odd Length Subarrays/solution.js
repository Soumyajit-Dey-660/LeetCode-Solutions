/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let currOdd = 1;
    let totalSum = 0;
    while (currOdd <= arr.length) {
        for (let i = 0; i < arr.length; i++) {
            if (currOdd + i > arr.length) break;
            for (let j = i; j < currOdd + i; j++) totalSum += arr[j];
        }
        currOdd += 2;
    }
    return totalSum;
};