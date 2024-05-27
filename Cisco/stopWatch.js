const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// remember onclick are functions!!

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function restart() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  // convert ms to hours, min, sec formula 👇
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let sec = Math.floor((elapsedTime / 1000) % 60);
  let millisec = Math.floor((elapsedTime % 1000) / 10);

  // give it zeros 👇 each display has 2 digits.

  hours = String(hours).padStart(2, "0");
  min = String(min).padStart(2, "0");
  sec = String(sec).padStart(2, "0");
  millisec = String(millisec).padStart(2, "0");

  // change display 👇

  display.textContent = `${hours}:${min}:${sec}:${millisec}`;
}
