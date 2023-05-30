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