/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let total = 0;
    function digits(number) {
        let totalDigits = 0;
        while (number > 0) {
            totalDigits += 1;
            number = Math.floor(number / 10);
        }
        return totalDigits;
    }
    nums.map((number) => {
        total = digits(number) % 2 === 0 ? total + 1 : total;
    });
    return total;
};
