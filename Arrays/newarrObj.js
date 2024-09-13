const newObj = {
    "name":"ehm",
    cars: [
        { carName: "Volvo", models: ["m1", "m2", "m3"] }
    ]
};

for (const carKey in newObj.cars) {
    const car = newObj.cars[carKey]; // Use carKey to get the actual car object
    console.log(car.carName); // Access the carName property
    console.log(car);
}

for (const j in newObj.cars) {
        const element = newObj.cars[0].models[1];
        console.log(element);
}
