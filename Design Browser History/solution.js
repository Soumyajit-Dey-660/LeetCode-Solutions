/**
 * @param {string} homepage
 */
 var BrowserHistory = function (homepage) {
    this._history = new DoubleLinkedList(homepage);
    this._curr = this._history;
    this._move = this._history;
};

var DoubleLinkedList = function(data, prev = null, next = null) {
    this.val = data;
    this.prev = prev;
    this.next = next;
}

// class DoubleLinkedList {
//     constructor(data, prev = null, next = null) {
//         this.val = data;
//         this.prev = prev;
//         this.next = next;
//     }
// }


/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    if (this._move !== this._curr) {
        this._curr = this._move;
    }
    let newSite = new DoubleLinkedList(url);
    this._curr.next = newSite;
    newSite.prev = this._curr;
    this._curr = newSite;
    this._move = this._curr;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    for (let i = 0; i < steps; i++) {
        if (this._move.prev === null) {
            return this._move.val;
        } else {
            this._move = this._move.prev;
        }
    }
    return this._move.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    for (let i = 0; i < steps; i++) {
        if (this._move.next === null) {
            return this._move.val;
        } else {
            this._move = this._move.next;
        }
    }
    return this._move.val;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
