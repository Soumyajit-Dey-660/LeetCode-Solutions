
var RecentCounter = function () {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    let noOfRequests = 0;
    this.requests.push(t);
    for (let i = 0; i < this.requests.length; i++) {
        if (this.requests[i] > t) break;
        if (this.requests[i] >= t - 3000 && this.requests[i] <= t)
            noOfRequests++;
    }
    return noOfRequests;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */