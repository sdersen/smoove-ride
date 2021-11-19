const darkSwitch = document.querySelector(".switch");
const headline = document.querySelector(".title");
const titleText = document.querySelector(".phrase");
const button = document.querySelector(".sign-up-btn");

darkSwitch.addEventListener("click", () => {
  headline.classList.toggle("white-text");
  titleText.classList.toggle("white-text");
  event.preventDefault();
  console.log("Toggled");
});
