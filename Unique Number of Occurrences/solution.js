/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let countMap = {};
    let uniques = [];
    arr.map(num => countMap[num] = countMap[num] ? countMap[num] + 1 : 1);
    for (key in countMap) {
        for (let i = 0; i < uniques.length; i++) {
            if (uniques[i] === countMap[key]) return false;
        }
        uniques.push(countMap[key]);
    }
    return true;
};