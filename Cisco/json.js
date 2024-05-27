//  JSON = javascript object notation - data-interchange format
//          used for exchanging data between a server and a web
//          App.
//          JSON files {key:value} OR {value1, value2, value3}
//                    or array of objects

//          JSON.stringify() = converts a JS object to a JSON string
//          JSON.parse() = converts a JSON string to a JS object

//  stringify()

// const names = ["SpongeBob", "Sandy", "Plankton", "Squidward"];
// const person = {
//   name: "SpongeBob",
//   age: 30,
//   isEmployed: true,
//   hobbies: ["Jellyfishing", "Cooking", "laughing"],
// };

// const people = [
//   {
//     name: "SpongeBob",
//     age: 30,
//     isEmployed: true,
//   },

//   {
//     name: "Patrick",
//     age: 34,
//     isEmployed: false,
//   },
//   {
//     name: "Squidward",
//     age: 45,
//     isEmployed: true,
//   },
//   {
//     name: "Sandy",
//     age: 22,
//     isEmployed: false,
//   },
// ];

// const jsonString = JSON.stringify(people);

// console.log(jsonString);

// parse *****************************************

// const jsonNames = `["SpongeBob", "Sandy", "Plankton", "Squidward"]`;
// const jsonPerson = `{
//   "name": "SpongeBob",
//   "age": 30,
//   "isEmployed": true,
//   "hobbies": ["Jellyfishing", "Cooking", "laughing"]
// }`;

// const jsonPeople = `[
//   {
//     "name": "SpongeBob",
//     "age": 30,
//     "isEmployed": true
//   },

//   {
//     "name": "Patrick",
//     "age": 34,
//     "isEmployed": false
//   },
//   {
//     "name": "Squidward",
//     "age": 45,
//     "isEmployed": true
//   },
//   {
//     "name": "Sandy",
//     "age": 22,
//     "isEmployed": false
//   }
// ]`;



// const parsedData = JSON.parse(jsonPeople);

// console.log(parsedData);

//  FETCH*************************
// a function , relative or absolute filepath.
//  or a URL
//  fetch returns a promise
//  to iterate all , values instead of value

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value.isEmployed)))
.catch(error => console.error(error))



