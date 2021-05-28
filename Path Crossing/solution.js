/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    const isIn = (array, elem) => {
        for (const arr of array) {
            if (arr[0] === elem[0] && arr[1] === elem[1]) return true;
        };
        return false;
    }
    let positions = [];
    let current = [0, 0];
    positions.push(current);
    for (const direction of path) {
        if (direction === 'N') current = [current[0], current[1] + 1];
        else if (direction === 'E') current = [current[0] + 1, current[1]];
        else if (direction === 'S') current = [current[0], current[1] - 1];
        else if (direction === 'W') current = [current[0] - 1, current[1]];

        if (isIn(positions, current)) return true;
        else positions.push(current);
    }
    return false;
};