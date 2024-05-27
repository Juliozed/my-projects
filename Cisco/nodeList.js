// NodeList = static collection of HTML element by id (id, class, element)

//  can be created by using querySelectorAll() , similar to an array , but
// but no map, filter, reduce methods.
// nodelist wont update to automatically refelct changes.

let buttons = document.querySelectorAll(".myButtons");

// Add HTML and CSS properties****************

// buttons.forEach((button) => {
//   button.style.backgroundColor = "lightgreen";
//   button.textContent += "🤢";
// });

// add eventlistener *************************

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.target.style.backgroundColor = "yellow";
//   });
// });

// eventlistener mouseover and mouseout************************

// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (e) => {
//     e.target.style.backgroundColor = "lightblue";
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (e) => {
//     e.target.style.backgroundColor = "blue";
//   });
// });

// Add an element***************

// const newButton = document.createElement("button"); //step 1

// step 2.
// newButton.textContent = "Button 5";

// newButton.classList = "myButtons";

// step3. append to the dom
// document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

//  Remove an element ******************

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.remove();
    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons);
  });
});
