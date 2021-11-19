const darkSwitch = document.querySelector(".switch");
const headline = document.querySelector(".title");
const titleText = document.querySelector(".phrase");

darkSwitch.addEventListener("click", () => {
  headline.classList.toggle("white-text");
  console.log("hej");
});
