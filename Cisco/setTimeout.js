// setTimeout() = function that allows you to schedule the execution of a function after an amount of time ms.

//   setTimeout(callback, delay)
//   clearTimeout(timeoutid) = can cancel a timeout before it triggers
//  break************************
// function sayHello() {
//   window.alert("hello");
// }

// setTimeout(sayHello, 3000);

//  anonymous function***************
// const timeOutId = setTimeout(() => window.alert("hello"), 3000);

// clearTimeout(timeOutId);

// button with timeout**************** in html
// onclick="setTimer()"

let timeOutId;

function startTimer() {
  timeOutId = setTimeout(() => window.alert("hello"), 3000);
  console.log("started");
}

function clearTimer() {
  clearTimeout(timeOutId);
  console.log("clear");
}
