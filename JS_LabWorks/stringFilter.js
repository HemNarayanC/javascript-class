
/*
    Write a javascript program to create an array of strings and use the filter()
method to filter out strings that start with the letter
&#39;A&#39;. Print the filtered array.
*/

let strArr = ['Abhijeet', 'Uranus', 'Axe', 'School'];

let filterArr = strArr.filter( (str) => {
        return str.charAt(0) === 'A';
});


function displayFilteredString(){
    console.log(filterArr);
}

displayFilteredString();



