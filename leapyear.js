// 4. Write a function that can tell us whether an year is a leap year or not.


function isLeapYear(year) {
    if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return "This year is leap year!"
    } else {
        return "This year is not leap year."}
    }
    let year = 2028;
    console.log(isLeapYear(year));
