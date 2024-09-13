function add(num1, num2){
    return num1 + num2;
}

function calcOperation(a, b, operationCallback, display){
   const result = operationCallback(a , b);
    display(result);
}

function displayResult(result){
    console.log(`The sum is ${result}`);
}

calcOperation(5, 6, add, displayResult);