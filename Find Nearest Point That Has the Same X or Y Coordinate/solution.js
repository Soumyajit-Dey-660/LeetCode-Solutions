/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    let isValid = false;
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x || points[i][1] === y) {
            isValid = true;
            continue;
        } else {
            points[i] = null;
        }
    }
    if (!(isValid)) {
        return -1;
    }
    let smallest_distance = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < points.length; i++) {
        if (points[i] !== null) {
            let distance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
            smallest_distance = distance < smallest_distance ? distance : smallest_distance;
        }
    }
    for (let i = 0; i < points.length; i++) {
        if (points[i] !== null) {
            if (Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]) === smallest_distance) {
                return i;
            }
        }
    }
};