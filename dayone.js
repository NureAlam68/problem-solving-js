// Problem-1: remove falsy values from an array
// falsy values are: false, null, 0, "", undefined, and NaN
const array = [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10, false, null, "", undefined, NaN];
// passing the array to the filter method
const filteredArray = array.filter(Boolean);
console.log(filteredArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  
// Problem-2: convert any value to boolean
// Solution: using the !! operator
const value = "hello";
const booleanValue = !!value;   // true
console.log(booleanValue); // true
console.log(!!0); // false
console.log(!!""); // false
// we can also use the Boolean function
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true


// Problem-3: resize an array
// Solution: using the length property
let newArray = [1, 2, 3, 4, 5];
newArray.length = 3;   // [1, 2, 3]
console.log(newArray);


// Problem-4: how to flatten a multidimensional array
// Solution: using the flat method
const multiArray = [[1, 2], [3, 4], [[5], 6]];
const flatArray = multiArray.flat(Infinity);    
console.log(flatArray); // [1, 2, 3, 4, 5, 6]    


// problem-5: short conditionals
const myName = "Nure Alam";
// if(myName) {
//   console.log("Hello " + myName);
// }else {
//   console.log("Hello Guest");
// }
myName && console.log("Hello " + myName); 
myName || console.log("Hello Guest");


// problem-6: Replace all occurrences of a string
// Solution: using the replace method with a regular expression
const quote = "React is a JS framework & this is the best JS framework";
const newQuote = quote.replace(/framework/g, "library");
console.log(newQuote); // React is a JS library & this is the best JS library


// problem-7: log values with variable names smartly
const name = "Nure Alam";
const age = 25;
const country = "Bangladesh";
console.log({name, age, country});
// console.table({name, age, country});


// problem-8: know performance of a function
// Solution: using the performance.now() method
const start = performance.now();
for(let i = 0; i < 50; i++) {
  console.log(i);
}
const end = performance.now();
console.log(`Time taken: ${end - start} milliseconds`);