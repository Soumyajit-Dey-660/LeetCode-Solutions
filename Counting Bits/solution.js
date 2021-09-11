/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let result = [];
    let numberOfOnes = num => {
        return [...num.toString(2)].filter(char => char === '1').length;
    }
    for (let i = 0; i <= n; i++) {
        result.push(numberOfOnes(i));
    }
    return result;
};