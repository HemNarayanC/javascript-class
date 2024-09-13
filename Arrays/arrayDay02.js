let arr = [55, 44, 66, 77, 88];
console.log(arr);
for(let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}

arr[3] = 90;
console.log(arr);

let newarr = arr.toString();
// console.log(arr.toString());
newarr[1]="60";      //index 1 won't be replaced by 60 as it is now a string
console.log(newarr); 
console.log(arr.join("+"));

console.log(eval(arr.join("+")));       //Evaluating the values of array through addition

