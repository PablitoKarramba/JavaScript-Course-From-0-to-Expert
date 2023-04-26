/*
JavaScript Fundamentals - Part 2
Coding Challenge #3

Use objects to calculate BMIs.
BMI = mass / height ** 2 (mass in kg and height in meter)

1. For each person, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
*/
const person1 = {
  name: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmiValue = this.mass / this.height ** 2;
    return this.bmiValue;
  },
};
const person2 = {
  name: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmiValue = this.mass / this.height ** 2;
    return this.bmiValue;
  },
};

/* One function to calculate both BMIs
const calcBMI = (mass, height) => mass / height ** 2;
person1.bmi = calcBMI(person1.mass, person1.height);
person2.bmi = calcBMI(person2.mass, person2.height);
*/

if (person1.calcBMI() > person2.calcBMI()) {
  console.log(
    `${person1.name}'s BMI (${person1.bmiValue.toFixed(1)}) is higher than ${
      person2.name
    }'s (${person2.bmiValue.toFixed(1)})`
  );
} else if (person1.bmiValue < person2.bmiValue) {
  console.log(
    `${person2.name}'s BMI (${person2.bmiValue.toFixed(1)}) is higher than ${
      person1.name
    }'s (${person1.bmiValue.toFixed(1)})`
  );
} else {
  console.log(
    `${person1.name} has the same BMI as ${
      person2.name
    } (${person1.bmiValue.toFixed(1)})`
  );
}
