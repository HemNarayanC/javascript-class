// BMI is computed using the formula weight / (height * height).

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

//weight in kg and height in m
console.log("BMI with weight 70 kg and height 1.92 m:", calculateBMI(70, 1.92));
console.log("BMI with weight 55 kg and height 1.74 m:", calculateBMI(55, 1.74));
