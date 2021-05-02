/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let scores = [];
    for (let op of ops) {
        if (op === "+") {
            scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
        } else if (op === "D") {
            scores.push(scores[scores.length - 1] * 2);
        } else if (op === "C") {
            scores = scores.splice(0, scores.length - 1);
        } else {
            scores.push(Number(op));
        }
    }
    return scores.reduce((a, b) => a + b);
};