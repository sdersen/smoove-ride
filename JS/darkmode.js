const darkSwitch = document.querySelector(".switch input");
const headline = document.querySelector(".title");
const titleText = document.querySelector(".phrase");
const signUpBtn = document.querySelector(".sign-up-btn");
const signUpParagraph = document.querySelector(".btn-container p");
const hiddenCar = document.querySelector(".hidden-car");
const heroBackround = document.querySelector(".hero-section");

// const burgerDiv = document.querySelector('.line1 .line2 .line3 ');

darkSwitch.addEventListener("click", () => {
  headline.classList.toggle("white-text");
  titleText.classList.toggle("white-text");
  signUpParagraph.classList.toggle("white-text");
  signUpBtn.classList.toggle("white-btn");
  hiddenCar.classList.toggle("hidden");
  heroBackround.classList.toggle("bg-black");
  // console.log("Toggled");
});
