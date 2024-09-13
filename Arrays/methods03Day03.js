const colors = ["red", "blue", "green"];
const cities = ["Paris", "Tokyo", "New York"];
const fruits = ["apple", "banana", "cherry"];

//concat() method
const newArr = colors.concat(cities, fruits);
console.log(newArr);
console.log(newArr.length);

//slice()
const fpt = [2.5, 3.14, 1.618, 0.99, 3.25, 4.201];
console.log(fpt.slice(2,4));       //does't include index 4 and only give a piece of array from index 2 to index

console.log(fpt.toReversed());  //reverse the array without altering the original array
console.log(fpt);




