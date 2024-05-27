// element selector = methods used to  target and manipulate HTML elments.
//  they allow you to select one or multiple HTML elements from the dom.
// 1. getElementById() element or null
// 2. getElementsClassName() HTML collection
// 3. querySelector() elements or null
// 4. querySelectorAll() nodelist
// 5. getElementsNyTagName() HTML collection

// take the plural and make it singular!!

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// for (let liElement of liElements) {
//   liElement.style.backgroundColor = "lightgreen";
// }

// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = "yellow";
// }

// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach((liElement) => {
//   liElement.style.backgroundColor = "yellow";
// });

// queryselectr is different , selects first one or ..

// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";

// selector ALL

const fruits = document.querySelectorAll("li");

console.log(fruits);

fruits.forEach((fruits) => {
  fruits.style.backgroundColor = "yellow";
});
