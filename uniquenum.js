// 6. How would you extract the unique numbers in an array?



function findDuplicateNumber(numbers) {
    const unique = numbers.filter(function(value, index, array) {
        let newArray = array.indexOf(value) === index;
        return newArray;
    })
    return unique;
}
const numbers = [1, 2, 33, 2, 1, 5, 6, 8, 4, 5, 10, 10];
console.log(findDuplicateNumber(numbers));