let a = 5;
let b = 5.11;
let c = "Just Kidding";
let x = true;
let y = undefined;
let z = null;

{
    let c = "You're Hired";

    //Here c is defined as block scope which let variable
    console.log(c);
}

console.log(a, b, c, x, y, z);
console.log(typeof a, typeof b, typeof c, typeof x, typeof y, typeof z);