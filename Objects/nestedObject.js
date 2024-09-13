myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

0

for (const vehicles in myObj.myCars) {
    /*const v = myObj.myCars.vehicles;  this won't work because dot is used with
     fixed named variable but vehicels is dynamic
    */


   const v = myObj.myCars.car1;
    console.log(v);
    const p = myObj.myCars[vehicles];
   console.log(p);
}

