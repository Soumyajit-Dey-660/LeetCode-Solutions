/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    let outOfPosition = 0;
    let position = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            outOfPosition++;
            position.push([s1[i], s2[i]]);
        }
    }
    if (outOfPosition === 0) return true;
    if (outOfPosition === 2 && position[0][0] === position[1][1] && position[0][1] === position[1][0]) return true;
    return false;
};