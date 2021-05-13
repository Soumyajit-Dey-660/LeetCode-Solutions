/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let result = [];
    const moduloList = [[3, 'Fizz'], [5, 'Buzz']];
    for (let i = 1; i < n + 1; i++) {
        let fizzBuzzString = '';
        for (const res of moduloList) {
            if (i % res[0] === 0) fizzBuzzString += res[1];
        }
        if (fizzBuzzString === '') result.push(i.toString());
        else result.push(fizzBuzzString);
    }
    return result;
};