// classList CSS! = element proerty in JS used to interact with an
// element's list of classes (CSS classes). Allows you to make reusable classes for many element across you webpage.

// add()
// remove()
// toggle()
// replace(oldClass, newClass)
// contains()
const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

// myButton.addEventListener("mouseover", (e) => {
//   e.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", (e) => {
//   e.target.classList.remove("hover");
// });

// toggle ***********

// myButton.addEventListener("mouseover", (e) => {
//   e.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", (e) => {
//   e.target.classList.toggle("hover");
// });

// Replace(oldClass, newClass) **************************************8
//  and contain();

// myH1.classList.add("enabled");
// myButton.classList.add("enabled");

// myButton.addEventListener("click", (e) => {
//   if (e.target.classList.contains("disabled")) {
//     e.target.textContent += "🥭";
//   } else {
//     e.target.classList.replace("enabled", "disabled");
//   }
// });

// myH1.addEventListener("click", (e) => {
//   if (e.target.classList.contains("disabled")) {
//     e.target.textContent += "🥭";
//   } else {
//     e.target.classList.replace("enabled", "disabled");
//   }
// });

// exercise 3 make nodelist of buttons , classlist

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    e.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (e) => {
    e.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("disabled")) {
      e.target.textContent += "😎";
    } else {
      e.target.classList.replace("enabled", "disabled");
    }
  });
});
