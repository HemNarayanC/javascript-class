const empObj = {
    "name": "Hem Narayan Chaudhary",
    "ID": 52036,
    "skills": ["C++", "Java", "JavaScript", "PHP", {cars:["volvo","rolls roys"]}]
}



for (const i in empObj) {
    const e = empObj[i];
    console.log(e);
    // console.log(e.name);
}
