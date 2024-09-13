const electronicsCart = [
    { name: 'Smartphone', price: 56699 },
    { name: 'Laptop', price: 111200 },
    { name: 'Headphones', price: 5999 },
    { name: 'Smartwatch', price: 4999 },
    { name: 'Tablet', price: 44000 }
  ];


  const totalCost = electronicsCart.reduce((cost, currentCost) => {
        // console.log(`cost: ${cost} , currentCost: ${currentCost.price}`);
        return cost + currentCost.price;
  },0); 



// forEach does not return a value like reduce 
/*let cost = 0;
electronicsCart.forEach((product) => {
    cost+=product.price;
})

console.log(`Total Cost is ${cost}`);
*/