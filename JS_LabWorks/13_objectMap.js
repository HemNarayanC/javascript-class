/*

    Write a javascript program to create an array of objects representing students
    where each object has a name and age property. Use the map() method to
    create a new array containing only the ages of the students. Print the new array.
*/

let Students = [
    {sname: "HomaNath", age: 26},
    {sname: "Nischal", age: 25},
    {sname: "Manish", age: 23},
    {sname: "Roshan", age: 20},
];

let newStd = Students.map( (std) => {
    // return std.age;
    return std[age:std.age];
});

console.log(newStd);