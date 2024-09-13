const pLang = {
    name: 'JavaScript',
    type: 'High-level',
    paradigms: ['Object-oriented', 'Functional', 'Imperative']
};

let x = "type";

console.log(pLang.name);
console.log(pLang[x]);
console.log(pLang["type"]);
console.log(pLang.paradigms[0]);


const plane = {
    model: 'Boeing 747',
    manufacturer: 'Boeing',
    features: [
        {
            name: 'Wing Span',
            measurement: '59.6 meters'
        }
    ]
};

let y = plane.features[0].name;
console.log(plane.features[0]["name"]);
console.log(y);