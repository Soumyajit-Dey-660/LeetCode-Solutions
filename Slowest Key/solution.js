/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let maxDuration = [keysPressed[0], releaseTimes[0]];
    for (let i = 1; i < releaseTimes.length; i++) {
        if (releaseTimes[i] - releaseTimes[i - 1] > maxDuration[1]) {
            maxDuration = [keysPressed[i], releaseTimes[i] - releaseTimes[i - 1]];
        }
        if ((releaseTimes[i] - releaseTimes[i - 1] === maxDuration[1])) {
            if (keysPressed.charCodeAt(i) > maxDuration[0].charCodeAt(0)) {
                maxDuration = [keysPressed[i], releaseTimes[i] - releaseTimes[i - 1]];
            }
        }
    }
    return maxDuration[0];
};