/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    let total = 0;
    const hasSetBit = num => {
        let totalSetBits = 0;
        while (num > 0) {
            if (num % 2 !== 0) totalSetBits++;
            num = Math.floor(num / 2);
        }
        return totalSetBits;
    }
    const isPrime = num => {
        if (num === 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    for (let i = left === 1 ? left + 1 : left; i < right + 1; i++) {
        if (isPrime(hasSetBit(i))) total++;
    }
    return total;
};