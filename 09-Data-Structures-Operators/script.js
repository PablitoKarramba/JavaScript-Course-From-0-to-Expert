'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(starterIndex, mainIndex, time, address);
  },

  oderPizza: function (ing1, ing2, ing3) {
    console.log(`Ingredients ${ing1} + ${ing2} + ${ing3}`);
  },
};

// Destructuring ARRAYS
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

const [starter, mainMenu] = restaurant.order(2, 0);
console.log(starter, mainMenu); // Garlic Bread Pizza

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Setting default values in case variable would be undefined
const [p = 1, q = 1, r = 1] = [2, 3];
console.log(p, q, r); // 2 3 1

// Destructuring OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Change variable names from property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); // Classico Italiano Object { thu: {…}, fri: {…}, sat: {…} } Array(4) [ "Italian", "Pizzeria", "Vegetarian", "Organic" ]

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // Array [] Array(4) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); // 23 7

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23

// Object passed as argument
restaurant.orderDelivery({
  time: '22:00',
  address: 'Samotna 14',
  mainIndex: 2,
  starterIndex: 1,
});

// Spread operator
const arr1 = [7, 8, 9];
console.log(...arr1);
const newArr = [1, 2, ...arr1]; // instead [1,2,arr1[0], arr1[1], arr1[2]]
console.log(newArr);

// Copyig arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Break string into single elements
const carBrand = 'Citroen';
const carBrandLetters = [...carBrand];
console.log(carBrandLetters);

// Use ... to pass array elements as parameter
const pizzaIngredients = ['tomato sauce', 'cheese', 'salami'];
restaurant.oderPizza(...pizzaIngredients);

// Rest pattern
const [ab, , cd, ...others] = [1, 2, 3, 4, 5, 6];
console.log(ab, cd, others);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 5);
const x = [5, 6, 3, 2];
add(...x);
add(x);

// Coding Challenge #1
/*
Build a football betting app

Suppose we get data from a web service about a certain game. In this challenge we're gonna work with the data.
Tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...players) {
  console.log(`${players.length} goals scored
Players:`);
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
};

printGoals(...game.scored);
