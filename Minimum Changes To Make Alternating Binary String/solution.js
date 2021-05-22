// A binary string can be made alternating two ways ->
// 1001 cand be made -> 1. 1010 and also 2. 0101
// See which one takes less number of operations and return that as answer
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let numOfDir = 0;
    let numOfBack = 1;
    let other = s.slice();
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            let temp = s[i] === '1' ? '0' : '1';
            s = s.slice(0, i) + temp + s.slice(i + 1);
            numOfDir += 1;
        }
    }
    let aux = other[0] === '1' ? '0' : '1';
    other = aux + other.slice(1);
    for (let i = 1; i < other.length; i++) {
        if (other[i] === other[i - 1]) {
            let temp = other[i] === '1' ? '0' : '1';
            other = other.slice(0, i) + temp + other.slice(i + 1);
            numOfBack += 1;
        }
    }
    return numOfDir <= numOfBack ? numOfDir : numOfBack;
};