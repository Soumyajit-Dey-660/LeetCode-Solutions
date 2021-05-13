/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let output = 0;
    const getComplementBinary = num => {
        let arr = [];
        while (num > 0) {
            arr.push(num % 2 === 0 ? 1 : 0);
            num = Math.floor(num / 2);
        }
        return arr.reverse();
    }
    const complementBinary = getComplementBinary(num);
    console.log(complementBinary);
    for (let i = 0; i < complementBinary.length; i++) {
        output += complementBinary[i] === 1 ? Math.pow(2, complementBinary.length - i - 1) : 0;
        console.log(output)
    }
    return output;
};

console.log(findComplement(2))