/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    const arr = date.split(" ");
    let result = arr[2] + '-';
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const index = month.indexOf(arr[1]) + 1;
    result += Number(index) >= 10 ? index + '-' : '0' + index + '-';
    let nonFormattedDay = arr[0];
    let day = [...nonFormattedDay].slice(0, nonFormattedDay.length - 2).join("")
    result += Number(day) >= 10 ? day : '0' + day;
    return result;
};