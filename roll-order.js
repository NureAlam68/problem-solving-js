// 3.How can you order roll numbers of students in your class sequentially?



function orderOfNumbers(numbers) {
    let orderNumbers = numbers.sort(function (a , b) {return a - b});
    return orderNumbers;
}
let numbers = [23, 24, 56, 78, 55, 19, 90, 12, 11, 7, 10, 1, 21, 112];
console.log(orderOfNumbers(numbers));