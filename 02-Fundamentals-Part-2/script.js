/*
JavaScript Fundamentals - Part 2
Coding Challenge #1

Each team competes 3 times, and then the average of the 3 scores is calculated.
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
*/
'use strict';
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgTeam1, avgTeam2) {
  if (avgTeam1 >= avgTeam2 * 2) {
    console.log(`Dolphins win (${avgTeam1}):(${avgTeam2}).`);
  } else if (avgTeam2 >= avgTeam1 * 2) {
    console.log(`Koalas win (${avgTeam2}):(${avgTeam1}).`);
  } else {
    console.log(`No team wins (${avgTeam1}):(${avgTeam2}).`);
  }
}

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);
