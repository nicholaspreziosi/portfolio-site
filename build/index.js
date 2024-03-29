// declare mobile drop down function
const dropdown = () => {
  if (
    mobileMenu.classList.value ===
    "w-full absolute top-0 left-0 hidden md:hidden"
  ) {
    mobileMenu.classList.value = "w-full absolute top-0 left-0 block md:hidden";
  } else {
    mobileMenu.classList.value =
      "w-full absolute top-0 left-0 hidden md:hidden";
  }
};

const colorHamburger = () => {
  if (hamburger.classList.contains("hamburger-white")) {
    hamburger.classList.remove("hamburger-white");
    hamburger.classList.add("hamburger-gradient");
  } else {
    hamburger.classList.remove("hamburger-gradient");
    hamburger.classList.add("hamburger-white");
  }
};

//declare icon fill functions
const emailHover = () => {
  emailIcon.setAttribute("fill", "url(#myGradient1)");
};

const emailLeave = () => {
  emailIcon.setAttribute("fill", "white");
};

const linkedinHover = () => {
  linkedinIcon.setAttribute("fill", "url(#myGradient2)");
};

const linkedinLeave = () => {
  linkedinIcon.setAttribute("fill", "white");
};

const githubHover = () => {
  githubIcon.setAttribute("fill", "url(#myGradient3)");
};

const githubLeave = () => {
  githubIcon.setAttribute("fill", "white");
};

const instagramHover = () => {
  instagramIcon.setAttribute("fill", "url(#myGradient4)");
};

const instagramLeave = () => {
  instagramIcon.setAttribute("fill", "white");
};

//declare desktop menu functions
const checkForHome = () => {
  if (isInViewport()) {
    desktopNav.setAttribute("style", "opacity: 1");
  } else {
    desktopNav.setAttribute("style", "opacity: 0");
  }
};

//
function isInViewport() {
  const rect = homeSection.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || homeSection.clientHeight) &&
    rect.right <= (window.innerWidth || homeSection.clientWidth)
  );
}

//query DOM
const mobileMenu = document.querySelector("#mobile-menu");
const hamburger = document.querySelector("#hamburger");
const emailGroup = document.querySelector("#email-icon-group");
const emailIcon = document.querySelector("#email-icon");
const linkedinGroup = document.querySelector("#linkedin-icon-group");
const linkedinIcon = document.querySelector("#linkedin-icon");
const githubGroup = document.querySelector("#github-icon-group");
const githubIcon = document.querySelector("#github-icon");
const instagramGroup = document.querySelector("#instagram-icon-group");
const instagramIcon = document.querySelector("#instagram-icon");
const desktopNav = document.querySelector("#desktop-menu-container");
const homeSection = document.querySelector("#home-section");

//bind events
hamburger.addEventListener("click", () => {
  dropdown();
  colorHamburger();
});
emailGroup.addEventListener("mouseover", emailHover);
emailGroup.addEventListener("mouseleave", emailLeave);
linkedinGroup.addEventListener("mouseover", linkedinHover);
linkedinGroup.addEventListener("mouseleave", linkedinLeave);
githubGroup.addEventListener("mouseover", githubHover);
githubGroup.addEventListener("mouseleave", githubLeave);
instagramGroup.addEventListener("mouseover", instagramHover);
instagramGroup.addEventListener("mouseleave", instagramLeave);
document.addEventListener("scroll", checkForHome);
window.addEventListener("resize", checkForHome);
