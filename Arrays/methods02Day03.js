let metD03 = [42, "Bag", 88, 20, 36, 65, "Mouse", 20, true, 89];
console.log(metD03.length);

//delete method in arrays
delete metD03[2];
console.log(metD03);
console.log(metD03.length);

//unshift adds item in the beginning while push() adds item at the end
let mD03 = [23, "Pencil", 46, 20, 36, 40, "CPU", 89];
console.log(mD03.length);
mD03.unshift(222);
console.log(mD03);
console.log(mD03.length);

/*shift deletes the item from the beginning while delete does it by and leaves a space i.e memory is not deallocated
*/

console.log(mD03.shift());
delete mD03[5];
console.log(mD03);
// console.log(mD03.length);


//sort() and reverse() in arrays, tosorted()--> it sorts an array by creating a new array
const UnsortedArray = ["dog", "cat", "elephant", "bear", "ant", "zebra"];
UnsortedArray.sort();
console.log(UnsortedArray);
console.log(UnsortedArray.reverse());

//toSorted()
const uArr = [34, 7, 23, 32, 5, 62, 18, 90];
console.log(uArr.toSorted());  //original array remains same
console.log(uArr);
console.log(uArr.splice(3, 2, "Bag", "Pencil", "Bike"));        //makes changes to original array
console.log(uArr);

