const fruits = ["apple", "banana", "cherry"];

//forEach loop
fruits.forEach((value, index, arr)=>{
    console.log(`${index}:${value}`);
    console.log(arr);
});

let num = ["100", "25", "35"];
console.log(num.sort());

let num1 = [100, 25, 35];
console.log(num1.sort(function(a,b){return a-b}));
// console.log(num1.sort());

for (const k of num1) {
    console.log(k);
}
