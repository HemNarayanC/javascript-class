const androidPhone = {
    brand: 'Samsung',
    model: 'Galaxy S24',
    releaseYear: 2024,
    screenSize: '6.8 inches',
    batteryCapacity: '5000 mAh'
};

//adding properties
androidPhone.charger = "67watt";

//accessing the 
let x = "charger";

console.log(androidPhone[x]);
console.log(androidPhone);

//deleting the properties
delete androidPhone.model;
console.log(androidPhone);