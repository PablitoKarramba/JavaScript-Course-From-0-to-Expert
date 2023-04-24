/*
JavaScript Fundamentals - Part 1
Coding Challenge #3

TODO:
- [X] Calculate the average score for each team
- [X] Compare scores to determine the winner
- [X] Print the result to the console

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

sumDolphins = 0;
for (let number of dolphinsScoreTestData2) {
  sumDolphins += number;
}
averageDolphins.push(sumDolphins / dolphinsScoreTestData2.length);

sumDolphins = 0;
for (let number of dolphinsScoreTestData3) {
  sumDolphins += number;
}
averageDolphins.push(sumDolphins / dolphinsScoreTestData3.length);

//Koalas calculations
let sumKoalas = 0;
for (let number of koalasScoreTestData1) {
  sumKoalas += number;
}
averageKoalas.push(sumKoalas / koalasScoreTestData1.length);

sumKoalas = 0;
for (let number of koalasScoreTestData2) {
  sumKoalas += number;
}
averageKoalas.push(sumKoalas / koalasScoreTestData2.length);

sumKoalas = 0;
for (let number of koalasScoreTestData3) {
  sumKoalas += number;
}
averageKoalas.push(sumKoalas / koalasScoreTestData3.length);

//Game results
if (averageDolphins.length === averageKoalas.length) {
  for (let i = 0; i < averageDolphins.length; i++) {
    if ((averageDolphins[i] && averageKoalas[i]) < minimumScore) {
      console.log(
        `Both teams scored below minimum score (${averageDolphins[i].toFixed(
          2
        )}:${averageKoalas[i].toFixed(2)}). No winner determined for game #${
          i + 1
        }`
      );
    } else if (averageDolphins[i] > averageKoalas[i]) {
      console.log(
        `Dolphins won game #${i + 1} - ${averageDolphins[i].toFixed(
          2
        )}:${averageKoalas[i].toFixed(2)}`
      );
    } else if (averageDolphins[i] < averageKoalas[i]) {
      console.log(
        `Koalas won game #${i + 1} - ${averageDolphins[i].toFixed(
          2
        )}:${averageKoalas[i].toFixed(2)}`
      );
    } else {
      console.log(
        `Game #${i + 1} resulted in a draw - ${averageDolphins[i].toFixed(
          2
        )}:${averageKoalas[i].toFixed(2)}`
      );
    }
  }
} else {
  console.log(`The amount of games played by both teams is nonequal`);
}
