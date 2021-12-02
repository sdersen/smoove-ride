const darkSwitch = document.querySelector(".switch input");
const headline = document.querySelector(".title");
const titleText = document.querySelector(".phrase");
const signUpBtn = document.querySelector(".sign-up-btn");
const signUpParagraph = document.querySelector(".btn-container p");
const hiddenCar = document.querySelector(".hidden-car");
const heroBackround = document.querySelector(".hero-section");
const burgerDivs = document.querySelectorAll(".burger div");
const navTags = document.querySelectorAll(".nav-links a");
const logoPaths = document.querySelectorAll(".logo path");
const darkmodeText = document.querySelector(".darkmode-text");
const titleSection = document.querySelector("#title-section");

darkSwitch.addEventListener("click", () => {
  headline.classList.toggle("white-text");
  titleText.classList.toggle("white-text");
  signUpParagraph.classList.toggle("white-text");
  signUpBtn.classList.toggle("white-btn");
  hiddenCar.classList.toggle("hidden");
  heroBackround.classList.toggle("bg-black");
  burgerDivs.forEach((burgerDiv) => {
    burgerDiv.classList.toggle("white-menu");
  });
  navTags.forEach((navTag) => {
    navTag.classList.toggle("white-text");
  });
  logoPaths.forEach((logoPath) => {
    logoPath.classList.toggle("fill-color");
  });
  darkmodeText.classList.toggle("white-text");

});
