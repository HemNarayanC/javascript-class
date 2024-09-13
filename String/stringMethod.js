let z = "JavaScrIpT";

console.log(z.toUpperCase());
console.log(z.toLowerCase());
console.log(z.charAt(2));

///slice method in string
console.log(z.slice(1,4));  //from index 1 to 3, doesn't include index 4
console.log(z.replace("T","P"));

//String replace method
let cartoonName = "Oggy & The Roses";
// console.log(cartoonName.replace("Roses", "Cockroaches"));
let updatedName = cartoonName.replace("Roses", "Cockroaches");
console.log(updatedName); // Output: Oggy & The Cockroaches
// console.log(cartoonName.replace("Roses","Cockroaches"));



//concatenation method

a="hi";
b="hello";
console.log(a.concat(b));

let concatenated = z.concat(" ",cartoonName);
console.log(concatenated);

console.log(`I love to watch ${updatedName} and I am writing this into ${z}`);

//Some other string methods

//startsWith() method
let boolI = z.startsWith("he");
console.log(boolI);
let boolII = z.startsWith("Ja");
console.log(boolII);

let checkEnd = z.endsWith("pT");
console.log(checkEnd);

//indexOf method
console.log(z.indexOf("a"));
console.log(z.lastIndexOf("a"));


