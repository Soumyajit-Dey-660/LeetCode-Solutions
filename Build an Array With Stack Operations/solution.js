/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let currentArray = [];
    let currPointer = 0;
    for (let num = 1; num <= n; num++) {
        if (currPointer === target.length) return currentArray;
        currentArray.push("Push");
        if (target[currPointer] == num) {
            currPointer++;
        } else {
            currentArray.push("Pop");
        }
    }
    return currentArray;
};