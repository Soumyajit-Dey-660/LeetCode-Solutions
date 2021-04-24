/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    let rowValue = coordinates.charCodeAt(0) - 97;
    let general = [false, true, false, true, false, true, false];
    let chessboard = [];
    for (let i = 0; i < 8; i++) {
        let row = [];
        if (i === 0 || i % 2 === 0) {
            row.push(...general);
            row.push(true);
        } else {
            row.push(true);
            row.push(...general);
        }
        chessboard.push(row);
    }
    return chessboard[rowValue][Number(coordinates[1]) - 1];
};
