/*
JavaScript Fundamentals - Part 2
Coding Challenge #2

Tip calculator: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'billsArr' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
*/
const calcTip = function (billValue) {
  if (billValue > 50 && billValue < 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

const billsArr = [125, 555, 44];
const tips = [];
for (let i = 0, j = billsArr.length; i < j; i++) {
  tips.push(calcTip(billsArr[i]));
}
console.log(tips);

//Bill+tip
const total = [];
for (let i = 0, j = tips.length; i < j; i++) {
  total.push(billsArr[i] + tips[i]);
}
console.log(total);
console.log(`Total values: ${total.join(', ')}.`);
