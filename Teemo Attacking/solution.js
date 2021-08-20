/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let total = 0;
    for (let i = 0; i < timeSeries.length - 1; i++) {
        if (timeSeries[i] === timeSeries[i + 1]) {
            continue;
        } else if (timeSeries[i] + duration > timeSeries[i + 1]) {
            total += timeSeries[i + 1] - timeSeries[i];
        } else {
            total += duration;
        }
    }
    total += duration;
    return total;
};