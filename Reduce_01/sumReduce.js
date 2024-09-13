let numArr = [5, 6, 7, 8, 9];

let initialVal = 0;

const totalVal = numArr.reduce((accVal, currNum) => {
    console.log(`accumulator: ${accVal} , currentValue: ${currNum}`);
    return accVal + currNum;
}, initialVal);

console.log(`Total value is ${totalVal}`);