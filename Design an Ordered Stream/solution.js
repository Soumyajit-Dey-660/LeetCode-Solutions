/**
 * @param {number} n
 */
var OrderedStream = function (n) {
    this.n = n;
    this.arr = new Array(n + 1).fill(null);
    this.ptr = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
    this.arr[idKey - 1] = value;
    let result = [];
    while (this.arr[this.ptr] !== null && this.ptr <= this.n - 1) {
        result.push(this.arr[this.ptr]);
        this.ptr += 1;
    }
    return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
