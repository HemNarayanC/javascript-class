let newArr = [45, "PHP", 56, 82];
console.log(newArr.length);
newArr[1]="Javascript";
for(i=0;i<newArr.length;i++){
    console.log(newArr[i]);
}

//pushing the element into the array
newArr.push("Python")
console.log(newArr);

//popping out the element
console.log(newArr.pop());
console.log(newArr, newArr.pop());

//shift-->pops out the first element and return it
console.log(newArr.shift());
console.log(newArr);

//Join method in array
let z = [45, "PHP", 56, 82];
let y = z.join(" and ");
console.log(y);