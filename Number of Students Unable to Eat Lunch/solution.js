/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let doesNumberExists = function (arr, num) {
        let found = false;
        for (let val of arr) {
            if (val === num) {
                found = true;
                break;
            }
        }
        return found;
    }
    for (let sandwich of sandwiches) {
        if (doesNumberExists(students, sandwich)) {
            let ind = students.indexOf(sandwich);
            let temp = [];
            for (let i = 0; i < ind; i++) {
                temp.push(students[i]);
            }
            for (let i = ind + 1; i < students.length; i++) {
                temp.push(students[i]);
            }
            students = temp;
        } else {
            return students.length;
        }
    }
    return 0;
};