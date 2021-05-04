/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    let distanceValue = 0;
    for (let val1 of arr1) {
        let flag = false;
        for (let val2 of arr2) {
            if (Math.abs(val1 - val2) <= d) {
                flag = true;
                break;
            }
        }
        if (!flag) distanceValue += 1;
    }
    return distanceValue;
};