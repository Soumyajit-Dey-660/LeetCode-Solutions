/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
    if (logs.length === 1) return logs[0][0];
    let populationTrack = new Array(101).fill(0);
    for (let log of logs) {
        for (let i = log[0] - 1950; i < log[1] - 1950; i++) {
            populationTrack[i] += 1;
        }
    }
    let maxPopulation = 0;
    let maxPopulationYear = 0;
    for (let i = 0; i < populationTrack.length; i++) {
        if (populationTrack[i] > maxPopulation) {
            maxPopulation = populationTrack[i];
            maxPopulationYear = 1950 + i;
        }
    }
    return maxPopulationYear;
};