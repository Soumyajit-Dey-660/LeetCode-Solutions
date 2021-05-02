/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let position;
    let vulnerable = 0;
    for (let row = 0; row < 8; row++) {
        let found = false;
        for (let column = 0; column < 8; column++) {
            if (board[row][column] === "R") {
                position = [row, column];
                found = true;
                break;
            }
        }
        if (found) break;
    }
    // Vertical attack
    // Upwards
    if (position[0] !== 0) {
        for (let i = position[0] - 1; i >= 0; i--) {
            if (board[i][position[1]] === 'B') break;
            if (board[i][position[1]] === 'p') {
                vulnerable++;
                break;
            }
        }
    }
    // Downwards
    if (position[0] !== 7) {
        for (let i = position[0] + 1; i < 8; i++) {
            if (board[i][position[1]] === 'B') break;
            if (board[i][position[1]] === 'p') {
                vulnerable++;
                break;
            }
        }
    }
    // Horizontal attack
    // Right to Left
    if (position[1] !== 0) {
        for (let i = position[1] - 1; i >= 0; i--) {
            if (board[position[0]][i] === 'B') break;
            if (board[position[0]][i] === 'p') {
                vulnerable++;
                break;
            }
        }
    }
    // Left to Right
    if (position[1] !== 7) {
        for (let i = position[1] + 1; i < 8; i++) {
            if (board[position[0]][i] === 'B') break;
            if (board[position[0]][i] === 'p') {
                vulnerable++;
                break;
            }
        }
    }

    return vulnerable;
};