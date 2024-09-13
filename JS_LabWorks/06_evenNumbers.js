let arrNums = [7,12,5,8,23,14,19,6,31,4];
let evenArr = [];
arrNums.forEach( function(num){
    if(num%2===0){
        evenArr.push(num);
    }
});

console.log(evenArr);