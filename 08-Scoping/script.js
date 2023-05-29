'use strict';

// -----===== This keyword =====-----
// This value depending on context:
// 1. Method
const peter = {
  age: 25,
  calcAge: function () {
    console.log(this); // Object { age: 25, calcAge: calcAge() }
  },
};
peter.calcAge();

// 2. Simple function call
const calcAge = function () {
  console.log(this); // undefined only in strict mode
  // if not strict mode then it points to Window object
};
calcAge();

// 3. Arrow function
const calcAgeArrow = () => {
  console.log(this); // Window
};
calcAgeArrow();

// 4. Event listener
document.querySelector('.btn').addEventListener('click', function () {
  console.log(this); // <button class="btn">
});

const obiekt = {
  age: 25,
  calcAge: function () {
    // This will be undefined, can't access age property
    const isAdult = function () {
      //console.log(this.age); TypeError: can't access property "age", this is undefined
    };

    // Pre ES6 solution
    const self = this;
    const isAdult1 = function () {
      console.log(self.age); // 25
    };

    // ES6+ solution: Arrow function
    const isAdult2 = () => {
      console.log(this.age); // 25
      // because parent scope is obiekt
    };
    isAdult();
    isAdult1();
    isAdult2();
  },
};

obiekt.calcAge();
