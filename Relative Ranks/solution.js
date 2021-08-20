/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    if (score.length === 1) {
        return ['Gold Medal'];
    }
    if (score.length === 2) {
        let result = score[0] > score[1] ? ['Gold Medal', 'Silver Medal'] : ['Silver Medal', 'Gold Medal'];
        return result;
    }
    let indexMap = {};
    let result = new Array(score.length).fill(null);
    for (let i = 0; i < score.length; i++) {
        indexMap[score[i]] = i;
    }
    score.sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    })
    result[indexMap[score[0]]] = 'Gold Medal';
    result[indexMap[score[1]]] = 'Silver Medal';
    result[indexMap[score[2]]] = 'Bronze Medal';
    for (let i = 3; i < score.length; i++) {
        result[indexMap[score[i]]] = (i + 1).toString();
    }
    return result;
};