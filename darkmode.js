const darkSwitch = document.querySelector(".switch");
const headline = document.querySelector(".title");
const titleText = document.querySelector(".phrase");
const button = document.querySelector('.sign-up-btn')

darkSwitch.addEventListener("click", () => {
  headline.classList.add('white-text');
  titleText.classList.add('white-text')
  console.log("hej");
});
