// prepend = beginning , append = end

// example 1
// step. 1 create the element
// const newH1 = document.createElement("h1");

// step.2 add attributes/properties

// newH1.textContent = "I love pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// step.3 append element to DOM

// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// insertBefore(newElement, currentElement); ***************
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// Remove the HTML element

// document.getElementById("box1").removeChild(newH1);

// example 2. ordered list ******************* 8:58;12 on video

// step 1. create element
const newListItem = document.createElement("li");

// step 2 add atrributes/properties
newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// step 3 append element to dom
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[2]);
