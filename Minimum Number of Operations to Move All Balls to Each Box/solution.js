/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    let result = [];
    for (let i = 0; i < boxes.length; i++) {
        let noOfOps = 0;
        for (let j = 0; j < boxes.length; j++) {
            if (i === j) continue;
            else {
                if (boxes[j] === '1')
                    noOfOps += Math.abs(i - j);
            }
        }
        result.push(noOfOps);
    }
    return result;
};