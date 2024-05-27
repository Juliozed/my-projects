// Dom navigation = the process of navigating through the structure of an
// HtML document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// firstElementChild*******************and last

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((ulElement) => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "yellow";
// });

// nextElementSibling()**************

// const element = document.getElementById("vegatables");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "orange";

// prevelementsibling*******************

// const element = document.getElementById("vegatables");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "orange";

// parentElement*************

// const element = document.getElementById("donuts");
// const parent = element.parentElement;
// parent.style.backgroundColor = "orange";

// childre *******************

const element = document.getElementById("snacks");
const children = element.children;

// Array.from(children).forEach((child) => {
//   child.style.backgroundColor = "orange";
// });

// by index

children[2].style.backgroundColor = "orange";
