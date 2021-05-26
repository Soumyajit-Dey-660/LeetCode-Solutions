/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let largest = -1;
    let secondLargest = -1;
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (const char of s) {
        if (numbers.indexOf(char) >= 0) {
            if (Number(char) > largest) {
                secondLargest = largest;
                largest = Number(char);
            }
            else if (Number(char) > secondLargest && Number(char) !== largest) {
                secondLargest = Number(char);
            }
        }
    }
    return secondLargest === largest ? -1 : secondLargest;
};