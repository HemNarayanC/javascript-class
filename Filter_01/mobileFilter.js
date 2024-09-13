const mobiles = [
    { brand: "Apple", model: "iPhone 14", price: "$999" },
    { brand: "Samsung", model: "Galaxy S23", price: "$799" },
    { brand: "Google", model: "Pixel 7", price: "$599" },
    { brand: "OnePlus", model: "OnePlus 11", price: "$749" },
    { brand: "Xiaomi", model: "Mi 13", price: "$649" },
    { brand: "Sony", model: "Xperia 1 IV", price: "$1199" },
    { brand: "Oppo", model: "Find X5 Pro", price: "$1099" },
    { brand: "Huawei", model: "P50 Pro", price: "$899" },
    { brand: "Motorola", model: "Edge 30", price: "$499" },
    { brand: "Nokia", model: "G22", price: "$299" },
    { brand: "Asus", model: "Zenfone 9", price: "$699" },
    { brand: "Realme", model: "GT 2 Pro", price: "$749" },
    { brand: "Vivo", model: "V27 Pro", price: "$699" },
    { brand: "Lava", model: "Agni 2", price: "$399" },
    { brand: "Infinix", model: "Zero Ultra", price: "$499" }
];

 // Display all phones initially
 const tableBody = document.querySelector('#phoneTable tbody');

 // Render all phones
 mobiles.forEach(phone => {
     const row = document.createElement('tr');
     
     row.innerHTML = `
         <td>${phone.brand}</td>
         <td>${phone.model}</td>
         <td>${phone.price}</td>
     `;
     row.style.border = "2px solid black";
     tableBody.appendChild(row);
     
 });

mobiles.filter((filterPhone) => {
    const newPrice = parseInt(filterPhone.price.replace('$',''));
    
})
