/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
    A.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
    let smallest = A[0] + K;
    let largest = A[A.length - 1] - K;
    if (smallest > largest) return 0;
    else return (largest - smallest);
};