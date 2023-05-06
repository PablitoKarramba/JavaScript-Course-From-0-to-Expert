'use strict';
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
const maximumTemperatures = [17, 21, 23];
const maximumTemperatures2 = [12, 5, -5, 0, 4];

const printForecast = function (temperatures) {
  let forecastString = [''];
  for (let i = 0; i < temperatures.length; i++) {
    forecastString.push(` ${temperatures[i]}ºC in ${i + 1} days `);
  }
  return forecastString.join('...');
};

console.log(printForecast(maximumTemperatures));
console.log(printForecast(maximumTemperatures2));
