/*
JavaScript Fundamentals - Part 1
Coding Challenge #3

TODO:
- [X] Calculate the average score for each team
- Compare scores to determine the winner
- Print the result to the console

NOTES:
- Minimum score of 100 required
- The draw to happen, both teams have to achieve at least 100 points
*/

//data
const minimumScore = 100;
const averageDolphins = [];
const averageKoalas = [];

const dolphinsScoreTestData1 = [96, 108, 89];
const dolphinsScoreTestData2 = [97, 112, 101];
const dolphinsScoreTestData3 = [97, 112, 101];

const koalasScoreTestData1 = [88, 91, 110];
const koalasScoreTestData2 = [109, 95, 123];
const koalasScoreTestData3 = [109, 95, 106];

//Dolphins calculations
let sumDolphins = 0;
for (let number of dolphinsScoreTestData1) {
  sumDolphins += number;
}
averageDolphins.push(sumDolphins / dolphinsScoreTestData1.length);
console.log(`Dolphins score after game 1: ${averageDolphins[0].toFixed(2)}`);

sumDolphins = 0;
for (let number of dolphinsScoreTestData2) {
  sumDolphins += number;
}
averageDolphins.push(sumDolphins / dolphinsScoreTestData2.length);
console.log(`Dolphins score after game 2: ${averageDolphins[1].toFixed(2)}`);

sumDolphins = 0;
for (let number of dolphinsScoreTestData3) {
  sumDolphins += number;
}
averageDolphins.push(sumDolphins / dolphinsScoreTestData3.length);
console.log(`Dolphins score after game 3: ${averageDolphins[2].toFixed(2)}`);

//Koalas calculations
let sumKoalas = 0;
for (let number of koalasScoreTestData1) {
  sumKoalas += number;
}
averageKoalas.push(sumKoalas / koalasScoreTestData1.length);
console.log(`Koalas score after game 1: ${averageKoalas[0].toFixed(2)}`);

sumKoalas = 0;
for (let number of koalasScoreTestData2) {
  sumKoalas += number;
}
averageKoalas.push(sumKoalas / koalasScoreTestData2.length);
console.log(`Koalas score after game 2: ${averageKoalas[1].toFixed(2)}`);

sumKoalas = 0;
for (let number of koalasScoreTestData3) {
  sumKoalas += number;
}
averageKoalas.push(sumKoalas / koalasScoreTestData3.length);
console.log(`Koalas score after game 3: ${averageKoalas[2].toFixed(2)}`);

//Game 1 results
//Game 2 results
//Game 3 results
