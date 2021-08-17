/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let [possibility1, possibility2] = edges[0];
    for (let i = 0; i <= 1; i++) {
        if (edges[1][i] === possibility1) return possibility1;
        else if (edges[1][i] == possibility2) return possibility2;
    }
};