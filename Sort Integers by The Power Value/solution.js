/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
 var getKth = function(lo, hi, k) {
    let stepsMap = [];
    let getSteps = num => {
        let totalSteps = 0;
        while(num !== 1) {
            num = num % 2 === 0 ? num / 2 : num * 3 + 1;
            totalSteps++;
        }
        return totalSteps;
    }
    for (let i = lo; i <= hi; i++) {
        stepsMap.push([i, getSteps(i)]);
    } 
    stepsMap.sort((a, b) => a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0);
    return stepsMap[k-1][0];
};