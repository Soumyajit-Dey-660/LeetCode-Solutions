/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trustMap = {};
    let trustNobody = [];
    for (let i = 1; i <= n; i++) {
        trustMap[i] = [];
    }
    for (let i = 0; i < trust.length; i++) {
        trustMap[trust[i][0]].push(trust[i][1]);
    }
    for (let key in trustMap) {
        if (trustMap[key].length === 0) {
            if (trustNobody.length === 0) {
                trustNobody.push(key);
            } else {
                return -1;
            }
        }
    }
    if (trustNobody.length === 0) {
        return -1;
    }
    for (let key in trustMap) {
        if (key !== trustNobody[0]) {
            if (trustMap[key].indexOf(Number(trustNobody[0])) === -1) {
                return -1;
            }
        }
    }
    return trustNobody[0];
};