/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    if (n === 0) return 0;
    const getBinaryArr = num => {
        let arr = [];
        while (num) {
            arr.push(num % 2);
            num = Math.floor(num / 2);
        }
        arr.reverse();
        return arr;
    }
    let lastPointer = 0;
    let maxDistance = 0;
    let binaryArr = getBinaryArr(n);
    for (let i = 0; i < binaryArr.length; i++) {
        if (binaryArr[i] === 1) {
            lastPointer = i;
            break;
        }
    }
    for (let i = lastPointer + 1; i < binaryArr.length; i++) {
        if (binaryArr[i] === 1) {
            maxDistance = i - lastPointer > maxDistance ? (i - lastPointer) : maxDistance;
            lastPointer = i;
        }
    }
    return maxDistance;
};