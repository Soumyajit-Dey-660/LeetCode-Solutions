/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.arr.length !== 0) {
        this.arr.push(Math.min(this.arr[this.arr.length - 2], val));
    } else {
        this.arr.push(val);
    }
    this.arr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    /* No need to check if the stack is empty or not as it is one of the
     constraints */
    this.arr = this.arr.slice(0, this.arr.length - 2);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    /* No need to check if the stack is empty or not as it is one of the
     constraints */
    return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    /* No need to check if the stack is empty or not as it is one of the
     constraints */
    return this.arr[this.arr.length - 2];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */