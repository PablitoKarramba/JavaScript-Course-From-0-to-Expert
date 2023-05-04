/*
JavaScript Fundamentals - Part 2
Coding Challenge #4

Improve tip calculator
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations
4. Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array.
*/
'use strict';
const bills = [22, 295, 176, 440, 37, 105, 10, 1110, 86, 52];
const tipsCalculated = [];
const totals = [];

//calcTip function from challenge2.js script
for (let i = 0; i < bills.length; i++) {
  tipsCalculated.push(calcTip(bills[i]));
  totals.push(bills[i] + tipsCalculated[i]);
}

const calcBillAverage = (arr) => {
  let billsSum = 0;
  for (let i = 0; i < arr.length; i++) {
    billsSum += arr[i];
  }
  const avg = billsSum / arr.length;
  return avg;
};

console.log(`Average: ${calcBillAverage(totals)}`);
