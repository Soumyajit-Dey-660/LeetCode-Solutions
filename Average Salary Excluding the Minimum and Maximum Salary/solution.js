/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let maximum = Math.max(...salary);
    let minimum = Math.min(...salary);
    let total = 0;
    salary.map(val => {
        if (val !== maximum && val !== minimum) {
            total += val;
        }
    });
    return Number(total) / (salary.length - 2);
};