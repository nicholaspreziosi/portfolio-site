// declare mobile drop down function
const dropdown = () => {
  if (mobileMenu.classList.value === "hidden md:hidden") {
    mobileMenu.classList.value = "block md:hidden";
  } else {
    mobileMenu.classList.value = "hidden md:hidden";
  }
};

//query DOM
const mobileMenu = document.querySelector("#mobile-menu");
const hamburger = document.querySelector("#hamburger");

//bind events
hamburger.addEventListener("click", dropdown);
