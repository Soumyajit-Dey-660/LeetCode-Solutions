/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let deeperLevel = 0;
    for (const directory of logs) {
        if (directory[0] === '.') {
            if (directory[1] === '.') deeperLevel = deeperLevel > 0 ? deeperLevel - 1 : 0;
        } else {
            deeperLevel += 1;
        }
    }
    return deeperLevel;
};