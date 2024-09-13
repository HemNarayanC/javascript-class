const cities = ["Paris", "Tokyo", "New York", "apple", "banana", "cherry"];

//filter
let newArr = cities.filter(newValue=>newValue.length>5);
console.log(newArr);
let newArr02 = cities.filter((newValue)=>{ return newValue.length>5});
console.log(newArr02);

let variable = (e)=>{
    if(e.length<=5){
        return true;
    }
    return false;
}

console.log(cities.filter(variable));

let v = [5, 2, 3, 8, 9, 1, 0];

console.log(v.reduce((a, b)=>a+b));

let str = "Javascript";
a = Array.from(str);
console.log(a);
