/*
JavaScript Fundamentals - Part 1
Coding Challenge #1

Tasks:
- store Mark's and John's mass (kg) & weight (m) in variables
- calculate BMIs
- create a boolean 'markHigherBMI'

BMI = mass / height ** 2

Coding Challenge #2

Tasks:
- improve Challenge #1 code
- using if statement, print message in the console
- use template literal in a message
*/
const weightMarkData1 = 78;
const heightMarkData1 = 1.69;
const weightMarkData2 = 92;
const heightMarkData2 = 1.95;

const weightJohnData1 = 95;
const heightJohnData1 = 1.88;
const weightJohnData2 = 85;
const heightJohnData2 = 1.76;

const BMIMarkData1 = (weightMarkData1 / heightMarkData1 ** 2).toFixed(2);
const BMIJohnData1 = (weightJohnData1 / heightJohnData1 ** 2).toFixed(2);

if (BMIMarkData1 > BMIJohnData1) {
  console.log(`Dataset 1:
Mark's BMI (${BMIMarkData1}) is higher than John's (${BMIJohnData1}) by ${(
    BMIMarkData1 - BMIJohnData1
  ).toFixed(2)}`);
} else {
  console.log(`Dataset 1:
Mark's BMI (${BMIMarkData1}) is lower than John's (${BMIJohnData1}) by ${
    BMIJohnData1 - BMIMarkData1
  }`);
}

const BMIMarkData2 = (weightMarkData2 / heightMarkData2 ** 2).toFixed(2);
const BMIJohnData2 = (weightJohnData2 / heightJohnData2 ** 2).toFixed(2);

if (BMIMarkData2 > BMIJohnData2) {
  console.log(`Dataset 2:
Mark's BMI (${BMIMarkData2}) is higher than John's (${BMIJohnData2}) by ${
    BMIMarkData2 - BMIJohnData2
  }`);
} else {
  console.log(`Dataset 2:
Mark's BMI (${BMIMarkData2}) is lower than John's (${BMIJohnData2}) by ${(
    BMIJohnData2 - BMIMarkData2
  ).toFixed(2)}`);
}
