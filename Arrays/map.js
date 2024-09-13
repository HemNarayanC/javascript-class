let arr = [5, 2, 3, 8, 9];
let newArr = [];
for(i=0; i<arr.length; i++){
    newArr.push(arr[i]**2);
}
console.log(newArr);

//using map
newArr = arr.map((e)=>{
    return e**3;
});
console.log(newArr);