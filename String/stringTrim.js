//trim() removes the backspaces from the string from both the ends
//trimStart() remvoes the spaces from the beginning
//trimEnd() removes the spaces from the end

let text = "     SmartPhone     ";
console.log(text.length)
let trimmedText = text.trim();
console.log(trimmedText, trimmedText.length);

console.log(text.trimStart(), (text.trimStart()).length);
console.log(text.trimEnd(), text.trimEnd().length);
