/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
    let count = 0;
    const rotateMap = {
        '2': '5',
        '5': '2',
        '6': '9',
        '9': '6',
        '0': '0',
        '1': '1',
        '8': '8'
    };
    for (let num = 1; num <= n; num++) {
        let string = num.toString();
        let rotated = '';
        let eligible = true;
        for (const digit of string) {
            if (digit === '3' || digit === '4' || digit === '7') {
                eligible = false;
                break;
            } else {
                rotated += rotateMap[digit];
            }
        }
        if (eligible && rotated !== string) count++;
    }
    return count;
};