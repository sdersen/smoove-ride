const gridItem1 = document.querySelector(".desktop-grid-item1");
const gridItem2 = document.querySelector(".desktop-grid-item2");

// TOGGLE HIDDEN CLASS ON OBJECTS IN TECH
window.addEventListener("scroll", function (event) {
  if (isInViewPort(gridItem1) || isInViewPort(gridItem2)) {
    gridItem1.classList.remove("hidden-scroll");
    gridItem2.classList.remove("hidden-scroll");
  }
});

// CHECK IF ITEMS ARE IN THE VIEWPORT
const isInViewPort = (element) => {
  // Get the bounding client rectangle position in the viewport
  var bounding = element.getBoundingClientRect();

  // IMG NEEDS TO BE FULLY VISIBLE IN THE VIEWPORT
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return true;
  } else {
    return false;
  }
};
