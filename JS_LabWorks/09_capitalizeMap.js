
/*
    Write a javascript program to create an array of strings and use map() to create a
    new array where each string is capitalized. Print the new array.
*/

let lcaseStr = ["home", "school", "money", "life", "hell"];

let newUCaseStr = lcaseStr.map( (str) =>{
    return str.toUpperCase();
});

console.log(newUCaseStr);