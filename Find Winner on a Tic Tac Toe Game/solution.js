/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    let matrix = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
    for (let i = 0; i < moves.length; i++) {
        let [row, col] = moves[i];
        matrix[row][col] = i % 2 === 0 ? 'X' : 'O';
    }
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (matrix[row][col] !== '-') {
                if (row === 0 && col === 0) {
                    // 3 Possibilities
                    // 1. Horizontal match
                    if ((matrix[0][0] === matrix[0][1]) && (matrix[0][0] === matrix[0][2])) {
                        return matrix[0][0] === 'X' ? 'A' : 'B';
                    } else if ((matrix[0][0] === matrix[1][0]) && (matrix[0][0] === matrix[2][0])) {
                        // 2. Vertical Match
                        return matrix[0][0] === 'X' ? 'A' : 'B';
                    } else {
                        // 3. Diagonal match
                        if ((matrix[0][0] === matrix[1][1]) && (matrix[0][0] === matrix[2][2])) {
                            return matrix[0][0] === 'X' ? 'A' : 'B';
                        }
                    }
                }
                if (row === 0 && col === 1) {
                    // 1 possibility - vertical match
                    if ((matrix[0][1] === matrix[1][1]) && (matrix[0][1] === matrix[2][1])) {
                        return matrix[0][1] === 'X' ? 'A' : 'B';
                    }
                }
                if (row === 0 && col === 2) {
                    // 2 possibilities
                    // 1. Vertical match
                    if ((matrix[0][2] === matrix[1][2]) && (matrix[0][2] === matrix[2][2])) {
                        return matrix[0][2] === 'X' ? 'A' : 'B';
                    } else if ((matrix[0][2] === matrix[1][1]) && (matrix[0][2] === matrix[2][0])) {
                        // 2. Diagonal Match
                        return matrix[0][2] === 'X' ? 'A' : 'B';
                    }
                }
                if (row === 1 && col === 0) {
                    // 1. Possibility - horizontal match
                    if ((matrix[1][0] === matrix[1][1]) && (matrix[1][0] === matrix[1][2])) {
                        return matrix[1][0] === 'X' ? 'A' : 'B';
                    }
                }
                if (row === 2 && col === 0) {
                    // 1. Possibility - horizontal match
                    if ((matrix[2][0] === matrix[2][1]) && (matrix[2][0] === matrix[2][2])) {
                        return matrix[2][0] === 'X' ? 'A' : 'B';
                    }
                }
            }
        }
    }
    let allMovesPlayed = true;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === '-') {
                allMovesPlayed = false;
                break
            }
        }
    }
    return allMovesPlayed ? 'Draw' : 'Pending';
};