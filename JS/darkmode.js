const darkSwitch = document.querySelector(".switch input");
const headline = document.querySelector(".title");
const titleText = document.querySelector(".phrase");
const SignUpbutton = document.querySelector(".sign-up-btn");
const signUpP = document.querySelector(".btn-container p");
const hiddenCar = document.querySelector(".hidden-car");
const heroBackround = document.querySelector(".hero-section");
// const burgerDiv = document.querySelector('.line1 .line2 .line3 ');

darkSwitch.addEventListener("click", () => {
  headline.classList.toggle("white-text");
  titleText.classList.toggle("white-text");
  signUpP.classList.toggle("white-text");
  SignUpbutton.classList.toggle("poo");
  hiddenCar.classList.toggle("hidden");
  heroBackround.classList.toggle("bg-black");
  // burgerDiv.classList.toggle('bg-white');
  // event.preventDefault();
  console.log("Toggled");
});
