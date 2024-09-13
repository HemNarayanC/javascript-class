const numbers = [10, 20, 30, 40, 50];
let deletedItem = numbers.pop(numbers.length-1);
console.log(deletedItem);
console.log(numbers);

let updatedNumbers = numbers.splice(1, 2);
console.log(numbers);
