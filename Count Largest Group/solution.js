/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    var getSum = function (num) {
        let totalSum = 0;
        while (num > 0) {
            totalSum += num % 10;
            num = Math.floor(num / 10);
        }
        return totalSum;
    }
    let maxEqualLength = 0;
    let valueCountMap = {};
    let maxLength = -1;
    for (let i = 1; i < n + 1; i++) {
        if (valueCountMap[getSum(i)]) {
            valueCountMap[getSum(i)].push(i);
        } else {
            valueCountMap[getSum(i)] = [i];
        }
    }
    for (const key in valueCountMap) {
        if (valueCountMap[key].length > maxLength) maxLength = valueCountMap[key].length;
    }
    for (const key in valueCountMap) {
        if (valueCountMap[key].length === maxLength) maxEqualLength++;
    }
    return maxEqualLength;
};