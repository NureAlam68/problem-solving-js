// 6. How would you extract the duplicate numbers in an array?



function findDuplicateNumber(numbers) {
    const duplicate = numbers.filter(function(value, index, array) {
        let newArray = array.indexOf(value) !== index;
        return newArray;
    })
    return duplicate;
}
const numbers = [1, 2, 33, 2, 1, 5, 6, 8, 4, 5, 10, 10];
console.log(findDuplicateNumber(numbers));










