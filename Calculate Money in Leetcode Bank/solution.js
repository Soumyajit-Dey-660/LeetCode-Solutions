/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let weeklySavings = 0;
    const weekSaved = Math.floor(n / 7);
    for (let i = 0; i < weekSaved; i++) {
        weeklySavings += Number((7 + i) * (7 + i + 1) / 2) - Number(i * (i + 1) / 2);
    }
    const remainingDays = n % 7;
    let savingsOnRemainingDays = 0;
    for (let i = 1; i < remainingDays + 1; i++) {
        savingsOnRemainingDays += weekSaved + i;
    }
    return weeklySavings + savingsOnRemainingDays;
};