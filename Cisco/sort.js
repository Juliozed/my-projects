//  Sort() = method to sort elements of an array in place
// dorts elements as strings in lexicographic order
// not alphabetical order!
// lexicographic = (alpahabet + numbers + symbols) as strings

let nums = [1, 20, 15, 3, 70, 56];

// this will sort them in order small to big
// big to small ********************8
//  A smallest or first , B is biggest or last
nums.sort((a, b) => a - b);
nums.sort((a, b) => b - a);
console.log(nums);

// 2nd example

const people = [
  { name: "Spongbob", age: 30, gpa: 2.1 },
  { name: "Sandy", age: 22, gpa: 4.0 },
  { name: "patrick", age: 32, gpa: 1.5 },
  { name: "Plankton", age: 75, gpa: 4.0 },
];

// sorts them out by age
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);
