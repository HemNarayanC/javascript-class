let originalStr = "Microsoft is a leading technology company known for its software products like Windows and Office.";

let orStr = "Microsoft is a global leader in technology, and Microsoft’s innovations have greatly impacted the industry. Microsoft’s products are used by millions around the world.";

let newString = originalStr.replace("leading","dominating");
console.log(newString);

let newStr = orStr.replaceAll("Microsoft","hem");
console.log(newStr);

let cmp = "comPanY";
// console.log(cmp.replace(/company/i,"hello"));       //case insensitive
// console.log(cmp.replace("comPanY", "Hi"));      //case sensitive

let arrayString = cmp.split("|");
console.log(arrayString);