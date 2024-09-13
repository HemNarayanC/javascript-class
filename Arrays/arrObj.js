const myObj = {
    name: "John",
    age: 30,
    cars: [
      { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Fiat", models: ["500", "Panda"] }
    ]
  };
  
  let result = ""; // Initialize the variable `result`
  
  for (const car of myObj.cars) {
    result += `${car.name}\n`; // Add car name followed by a newline
    for (const model of car.models) {
      result += `  - ${model}\n`; // Add each model with a bullet point and a newline
    }
  }
  
  console.log(result); // Output the plain text string
  