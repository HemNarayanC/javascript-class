console.log("Star Pattern");
for(let i = 1; i<=5; i++){
    let star = "";
    for(let j = 1; j <= i ; j++){
        star = star + "*"
    }
    console.log(star);
}

For in Loop

let obj = {
    "Emp Name": "Random Employee",
    "Emp ID": 120013,
    Salary: 80000
}

let o = {
        "Name": "Sandeep",
        "ID": 4848,
        Code: 1024
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,":", element);
        console.log(element);
    }
}

for(const key in o){
    if(Object.hasOwnProperty.call(o, key))
    {
        const e = o[key];
        console.log(key);
        console.log(e)
    }
}