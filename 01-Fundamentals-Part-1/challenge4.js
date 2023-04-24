/*
JavaScript Fundamentals - Part 1
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

Notes:
- use only ternary operator
*/
const billValues = [275, 40, 430];

for (let i = 0; i < billValues.length; i++) {
  let tip =
    billValues[i] >= 50 && billValues[i] <= 300
      ? billValues[i] * 0.15
      : billValues[i] * 0.2;
  console.log(`Bill value: ${billValues[i]}
Tip value: ${tip}
    Final value: ${billValues[i] + tip}`);
}
