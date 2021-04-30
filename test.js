/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let compareMap = {};
    let counter = 1;
    let result = [];
    let getLength = function (map) {
        var totalLength = 0;
        for (let key in map) {
            totalLength += 1;
        }
        return totalLength;
    }
    let getMap = function (string) {
        let map = {};
        for (let i = 0; i < string.length; i++) {
            if (map[string[i]]) map[string[i]] += 1;
            else map[string[i]] = 1;
        }
        return map;
    }
    compareMap = getMap(A[0]);
    while (counter < A.length && getLength(compareMap) > 0) {
        let currMap = getMap(A[counter]);
        for (let key in compareMap) {
            if (compareMap[key] >= currMap[key]) compareMap[key] = currMap[key];
            if (!currMap[key]) delete compareMap[key];
        }
        counter++;
    }
    for (let key in compareMap) {
        for (let i = 0; i < compareMap[key]; i++) {
            result.push(key);
        }
    }
    return result;
};