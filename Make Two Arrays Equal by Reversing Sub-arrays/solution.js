/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    let arrMap = {};
    let targetMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (arrMap[arr[i]]) arrMap[arr[i]] += 1;
        else arrMap[arr[i]] = 1;
    }
    for (let i = 0; i < target.length; i++) {
        if (targetMap[target[i]]) targetMap[target[i]] += 1;
        else targetMap[target[i]] = 1;
    }
    for (key in arrMap) {
        if (arrMap[key] !== targetMap[key]) return false
    }
    return true;
};