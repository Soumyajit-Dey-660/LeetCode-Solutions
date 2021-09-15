/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let checkerMap = {};
    // CHECK IF ALL THE COLUMNS ARE VALID OR NOT
    for (let column = 0; column < 9; column++) {
        checkerMap = {};
        for (let row = 0; row < 9; row++) {
            if (board[row][column] === '.') continue;
            if (checkerMap[board[row][column]] !== undefined) return false;
            else checkerMap[board[row][column]] = true;
        }
    }
    // CHECK IF ALL THE ROWS ARE VALID OR NOT
    for (let row = 0; row < 9; row++) {
        checkerMap = {};
        for (let column = 0; column < 9; column++) {
            if (board[row][column] === '.') continue;
            if (checkerMap[board[row][column]] !== undefined) return false;
            else checkerMap[board[row][column]] = true;
        }
    }
    // CHECK IF EVERY 3X3 BOXES ARE VALID OR NOT
    checkerMap = {};
    // 1ST BOX
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            if (board[row][column] === '.') continue;
            if (checkerMap[board[row][column]] !== undefined) return false;
            else checkerMap[board[row][column]] = true;
        }
    }
    checkerMap = {};
    // 4TH BOX
    for (let row = 3; row < 6; row++) {
        for (let column = 0; column < 3; column++) {
            if (board[row][column] === '.') continue;
            if (checkerMap[board[row][column]] !== undefined) return false;
            else checkerMap[board[row][column]] = true;
        }
    }
    checkerMap = {};
    // 7TH BOX
    for (let row = 6; row < 9; row++) {
        for (let column = 0; column < 3; column++) {
            if (board[row][column] === '.') continue;
            if (checkerMap[board[row][column]] !== undefined) return false;
            else checkerMap[board[row][column]] = true;
        }
    }
    // 2ND BOX
    checkerMap = {};
    for (let row = 0; row < 3; row++) {
        for (let column = 3; column < 6; column++) {
            if (board[row][column] === '.') continue;
            if (checkerMap[board[row][column]] !== undefined) return false;
            else checkerMap[board[row][column]] = true;
        }
    }
    // 3RD BOX
    checkerMap = {};
    for (let row = 0; row < 3; row++) {
        for (let column = 6; column < 9; column++) {
            if (board[row][column] === '.') continue;
            if (checkerMap[board[row][column]] !== undefined) return false;
            else checkerMap[board[row][column]] = true;
        }
    }
    // 5TH BOX
    checkerMap = {};
    for (let row = 3; row < 6; row++) {
        for (let column = 3; column < 6; column++) {
            if (board[row][column] === '.') continue;
            if (checkerMap[board[row][column]] !== undefined) return false;
            else checkerMap[board[row][column]] = true;
        }
    }
    checkerMap = {};
    // 6TH BOX
    for (let row = 3; row < 6; row++) {
        for (let column = 6; column < 9; column++) {
            if (board[row][column] === '.') continue;
            if (checkerMap[board[row][column]] !== undefined) return false;
            else checkerMap[board[row][column]] = true;
        }
    }
    checkerMap = {};
    // 8TH BOX
    for (let row = 6; row < 9; row++) {
        for (let column = 3; column < 6; column++) {
            if (board[row][column] === '.') continue;
            if (checkerMap[board[row][column]] !== undefined) return false;
            else checkerMap[board[row][column]] = true;
        }
    }
    checkerMap = {};
    // 9TH BOX
    for (let row = 6; row < 9; row++) {
        for (let column = 6; column < 9; column++) {
            if (board[row][column] === '.') continue;
            if (checkerMap[board[row][column]] !== undefined) return false;
            else checkerMap[board[row][column]] = true;
        }
    }
    return true;
};