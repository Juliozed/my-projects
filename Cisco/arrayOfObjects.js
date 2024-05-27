//  array of objects

const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "hot dog", color: "peach", calories: 210 },
  { name: "hash Brown", color: "brown", calories: 300 },
  { name: "lollipop", color: "blue", calories: 110 },
  { name: "banana", color: "yellow", calories: 60 },
];

//  ForEach() .................................
// need callbakc, arrow function, or function expression
// splice, pop, push etc...
fruits.forEach((fruit) => console.log(fruit.calories));

//  MAP():........................
// returns an array of what you're looking for ...

const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);
const fruitCalories = fruits.map((fruit) => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// filter();.........................
// will return a new array after checking a condition in your array

const colorFruit = fruits.filter((fruit) => fruit.color === "red");
const fruitLowCal = fruits.filter((fruit) => fruit.calories < 120);
const fruitHighCal = fruits.filter((fruit) => fruit.calories >= 120);

console.log(colorFruit);
console.log(fruitLowCal);
console.log(fruitHighCal);

//  reduce();.................................
// return a single vale , an object, a bit complicated.
// takes 2 params. accumulator , and element.

const maxFruit = fruits.reduce((max, fruit) => (fruit.calories > max.calories ? fruit : max));

console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) => (fruit.calories < min.calories ? fruit : min));

console.log(minFruit);
