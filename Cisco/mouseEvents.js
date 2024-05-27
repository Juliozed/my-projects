// eventListeners = listens for specific events to create interactive web pages , events: click, mouseover, mouseout

//  .addEventListener(event, callback) or anonymous function

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "Now I'm Red! 🍎";
// }

// myBox.addEventListener("click", changeColor);

myButton.addEventListener("click", (e) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "Now I'm Red! 🍎";
});

myButton.addEventListener("mouseout", (e) => {
  myBox.style.backgroundColor = "lightblue";
  myBox.textContent = "Now I'm blue 🩵🩵🩵";
});

myButton.addEventListener("mouseover", (e) => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Now I'm Yellow 💛";
});
