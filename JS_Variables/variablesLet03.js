let x;
// x = 50;
x = "new value";
{
//    let x = 90;
let x = "changed value";
    console.log(x);
}
// x = "Javascript";
console.log(x);

// var y = 190;
var y = "original value";
{
// console.log("This is var");
// y = 120;
y = "modified value";
console.log(y);
}
console.log(y);