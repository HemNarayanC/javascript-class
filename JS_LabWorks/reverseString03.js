let str = "JavaScript";
let reversed = "";
let index = str.length - 1;

do {
    reversed += str[index];
    index--;
} while (index >= 0);

console.log(reversed);
