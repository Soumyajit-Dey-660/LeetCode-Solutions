/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    if (start === destination) {
        return 0;
    } else if (start < destination) {
        let clockwiseDistance = 0;
        let antiClockwiseDistance = 0;
        for (let i = start; i < destination; i++) {
            clockwiseDistance += distance[i];
        }
        for (let i = 0; i < start; i++) {
            antiClockwiseDistance += distance[i];
        }
        for (let i = destination; i < distance.length; i++) {
            antiClockwiseDistance += distance[i];
        }
        return Math.min(clockwiseDistance, antiClockwiseDistance);
    } else {
        let clockwiseDistance = 0;
        let antiClockwiseDistance = 0;
        for (let i = destination; i < start; i++) {
            antiClockwiseDistance += distance[i];
        }
        for (let i = start; i < distance.length; i++) {
            clockwiseDistance += distance[i];
        }
        for (let i = 0; i < destination; i++) {
            clockwiseDistance += distance[i];
        }
        return Math.min(clockwiseDistance, antiClockwiseDistance);
    }
};