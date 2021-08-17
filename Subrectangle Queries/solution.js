/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
    this.matrix = rectangle;
    this.row = this.matrix.length;
    this.column = this.matrix[0].length;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {
    for (let r = row1; r <= row2; r++) {
        for (let c = col1; c <= col2; c++) {
            this.matrix[r][c] = newValue;
        }
    }
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
    return this.matrix[row][col];
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */