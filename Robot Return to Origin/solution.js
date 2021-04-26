/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let position = [0, 0];
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "U") position[1] += 1;
        if (moves[i] === "D") position[1] -= 1;
        if (moves[i] === "L") position[0] -= 1;
        if (moves[i] === "R") position[0] += 1;
    }
    if (position[0] === 0 && position[1] === 0) return true;
    return false;
};