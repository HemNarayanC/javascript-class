//pad adds extra characters to the expression inorder to match the specified length

let str = "3";
console.log(str.padStart(4,0));
console.log(str.padStart(4,"x"));
console.log(str.padEnd(4,"x"));
console.log(str.padEnd(4,0));

/*padEnd and padStart are string method so to pad numbers they are converted to 
string */

let numb = 9;
// console.log(numb.padEnd(5,"c"));        //will show an error
let text = numb.toString();
console.log(text.padStart(5,"x"));

let myName = "PHP";
console.log((myName + '\n').repeat(2));