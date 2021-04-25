/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    let result = [];
    let odds = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) result.push(A[i]);
        else odds.push(A[i]);
    }
    for (let i = 0; i < odds.length; i++) {
        result.push(odds[i]);
    }
    return result;
};