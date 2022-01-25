/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let countMap = {};
    for (let i = 0; i < list1.length; i++) {
        countMap[list1[i]] = [-1, i];
    }
    for (let i = 0; i < list2.length; i++) {
        if (countMap[list2[i]] !== undefined) {
            countMap[list2[i]][0] = 1;
            countMap[list2[i]][1] += i;
        }
    }
    let sortedMapKeys = Object.keys(countMap).sort((a, b) => {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        return 0;
    });
    let minIndexSum = 10e4+5;
    let result = [];
    for (let restaurant of sortedMapKeys) {
        if (countMap[restaurant][0] === 1) {
            if (countMap[restaurant][1] === minIndexSum) {
                result.push(restaurant);
            } else if (countMap[restaurant][1] < minIndexSum) {
                minIndexSum = countMap[restaurant][1];
                result = [restaurant];
            }
        }
    }
    return result;
};