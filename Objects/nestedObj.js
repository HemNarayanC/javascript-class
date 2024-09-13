
const myObj = {
    name: "John",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
};

const h = Object.values(myObj);
console.log(h);

const j = Object.entries(myObj);
console.log(j);

let myString = JSON.stringify(myObj);
console.log(myString);
