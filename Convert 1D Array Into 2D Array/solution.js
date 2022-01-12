var construct2DArray = function(original, m, n) {
    if (m*n !== original.length) return [];
    let result = [];
    let counter = 0;
    for (let i = 0; i < m; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(original[counter]);
            counter++;
            if (j === n-1) result.push(temp);
        }
    }
    return result;
};