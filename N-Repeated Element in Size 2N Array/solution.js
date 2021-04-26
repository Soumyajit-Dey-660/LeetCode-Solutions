/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    let uniques = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < uniques.length; j++) {
            if (uniques[j] === A[i]) {
                return A[i];
            }
        }
        uniques.push(A[i]);
    }
};