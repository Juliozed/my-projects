// nested objects = objects inside objects
// child enclosed in parent, more complex obstructures

//  person{address}, contactinfo{}
// shoppingCart{}, mouse{}, monitor{}

const person = {
  fullname: "spongbob squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyFishing", "cooking"],
  address: {
    street: "124 conch street",
    city: "bikini bottom",
    country: "INt. waters",
  },
};

// loop through

for (const property in person.address) {
  console.log(person.address[property]);
}

console.log(person.fullname);

console.log(person.age);

console.log(person.isStudent);

console.log(person.hobbies[2]);

console.log(person.address.street);

// example 2. in a class.classes may have constructors!

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Jose", 35, "123 jump street", "nowheresville", "holland");

const person2 = new Person("john", 34, "567 hign street", "manorville", "belgium");

const person3 = new Person("bill", 12, "666 upton street", "gayville", "Angola");

console.log(person1.name);

console.log(person2.address.country);

console.log(person3.address.city);
