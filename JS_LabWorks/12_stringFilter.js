
/*
    12. Write a javascript program to create an array of strings and use the filter()
    method to filter out strings that start with the letter
    &#39;A&#39;. Print the filtered array.
*/ 

let myString = ["Abacus", "Quilt", "Apple", "Axe", "Laptop", "Nvidia", "Andres"];

let newString = myString.filter( (str) => {
    return str.startsWith('A');
});

console.log(newString);