let obj = {
    fname:"Hem Narayan",
    lname: "Chaudhary",
    age: 20,
    nationality: "Nepali",
    myCars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
      }
}

for (const key in obj) {
    let values = obj.myCars[key];
    console.log(values);
}