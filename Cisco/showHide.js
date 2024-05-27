const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", (e) => {
  if (myImg.style.display === "none") {
    myImg.style.display = "block";
    myButton.textContent = "hide";
  } else {
    myImg.style.display = "none";
    myButton.textContent = "Appear!";
  }
});
