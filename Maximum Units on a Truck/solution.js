/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    let result = 0;
    let flag = true;
    let counter = 0;
    boxTypes.sort((a, b) => {
        if (a[1] < b[1]) return 1;
        if (a[1] > b[1]) return -1;
        return 0;
    });
    while (counter < boxTypes.length && truckSize > 0) {
        if (boxTypes[counter][0] <= truckSize) {
            result += boxTypes[counter][0] * boxTypes[counter][1];
            truckSize -= boxTypes[counter][0];
        } else {
            result += truckSize * boxTypes[counter][1];
            break;
        }
        counter++;
    }
    return result;
};