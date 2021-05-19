/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let result = new Array(code.length).fill(0);
    if (k === 0) return result;
    const totalSumArr = code.reduce((a, b) => a + b, 0);
    if (k > 0) {
        const totalRound = Math.floor(k / code.length);
        for (let i = 0; i < code.length; i++) {
            let total = totalRound * totalSumArr;
            for (let j = 1; j <= k % code.length; j++) {
                total += code[(i + j) % code.length];
            }
            result[i] = total;
        }
    } else {
        // Implement logic for negative k
        const totalRound = Math.floor(Math.abs(k) / code.length);
        for (let i = 0; i < code.length; i++) {
            let total = totalRound * totalSumArr;
            for (let j = 1; j <= Math.abs(k) % code.length; j++) {
                total += (i - j) >= 0 ? code[(i - j)] : code[code.length + (i - j)];
            }
            result[i] = total;
        }
    }
    return result;
};