// When the user scrolls the page, execute scrollFunction
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// Nav functions
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// Pop Up

const popUp = document.querySelector('.pop-up');
const popUpButton = document.querySelector('.button');
const closeButton = document.querySelector('close-pop-up')

popUpButton.addEventListener('click', function () {
  popUp.classList.remove('hidden');
})
closeButton.addEventListener('click', function () {
  popUp.classList.add('hidden');
})


