let people = [
    { name: 'HomaNath', age: 20 },
    { name: 'Nischal', age: 23 },
    { name: 'Roshan', age: 25 }
];

let newPerson = {
    name: 'Hem Narayan',
    age: 21
};

//Removing the last person
people.pop();
console.log('Array after removing the last person:', people);

//adding a new person
people.push(newPerson);
console.log('Array after adding new person:', people);

let newPeople = people.filter((data)=> data.age>20);
console.log(newPeople);

