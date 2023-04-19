/*
JavaScript Fundamentals - Part 1
Coding Challenge #1

Tasks:
- store Mark's and John's mass (kg) & weight (m) in variables
- calculate BMIs
- create a boolean 'markHigherBMI'

BMI = mass / height ** 2
*/
const weightMarkData1 = 78;
const heightMarkData1 = 1.69;
const weightMarkData2 = 92;
const heightMarkData2 = 1.95;

const weightJohnData1 = 95;
const heightJohnData1 = 1.88;
const weightJohnData2 = 85;
const heightJohnData2 = 1.76;

let markHigherBMI;

const BMIMarkData1 = weightMarkData1 / heightMarkData1 ** 2;
const BMIJohnData1 = weightJohnData1 / heightJohnData1 ** 2;
markHigherBMI = BMIMarkData1 > BMIJohnData1;
console.log("Mark's BMI: " + BMIMarkData1, "; John's BMI: " + BMIJohnData1);
console.log(markHigherBMI);

const BMIMarkData2 = weightMarkData2 / heightMarkData2 ** 2;
const BMIJohnData2 = weightJohnData2 / heightJohnData2 ** 2;
markHigherBMI = BMIMarkData2 > BMIJohnData2;
console.log("Mark's BMI: " + BMIMarkData2, "; John's BMI: " + BMIJohnData2);
console.log(markHigherBMI);
