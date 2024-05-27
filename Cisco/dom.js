// DOM = document object model
// object{} that represents the page you see in the web browser.
// Provides you with an API to interact with.
// web browser constructs the DOM when it loads an HTML document.
// and structures all the lemenst in a tree like representation.
// Javascript can acess the DOM to dynamically change content, structure and
// style of a web page.
//  console.dir(); will give you all the properties in the object

const username = "Bro Code";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `guest: ` : username;
