/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
    let result = [];
    let sortable = [];
    for (let row = 0; row < R; row++) {
        for (let column = 0; column < C; column++) {
            let distance = Math.abs(row - r0) + Math.abs(column - c0);
            sortable.push([[row, column], distance]);
        }
    }
    sortable.sort((a, b) => {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        return 0;
    });
    sortable.map(position => result.push(position[0]));
    return result;
};