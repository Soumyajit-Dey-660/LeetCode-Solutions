/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let curr_pointer = 0;
    let next_pointer = 0;
    let remArr = [];
    for (let val of arr2) {
        next_pointer = curr_pointer + 1;
        while (next_pointer < arr1.length) {
            if (arr1[curr_pointer] === val) curr_pointer++;
            if (arr1[next_pointer] === val) {
                let temp = arr1[curr_pointer];
                arr1[curr_pointer] = arr1[next_pointer];
                arr1[next_pointer] = temp;
                curr_pointer++;
            }
            next_pointer++;
        }
    }
    for (let rem = curr_pointer; rem < arr1.length; rem++) remArr.push(arr1[rem]);
    remArr.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
    arr1 = arr1.slice(0, curr_pointer);
    for (let val of remArr) arr1.push(val);
    return arr1;
};