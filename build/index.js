// declare mobile drop down function
const dropdown = () => {
  if (mobileMenu.classList.value === "hidden md:hidden") {
    mobileMenu.classList.value = "block md:hidden";
  } else {
    mobileMenu.classList.value = "hidden md:hidden";
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

//bind events
hamburger.addEventListener("click", dropdown);
emailGroup.addEventListener("mouseover", emailHover);
emailGroup.addEventListener("mouseleave", emailLeave);
linkedinGroup.addEventListener("mouseover", linkedinHover);
linkedinGroup.addEventListener("mouseleave", linkedinLeave);
githubGroup.addEventListener("mouseover", githubHover);
githubGroup.addEventListener("mouseleave", githubLeave);
instagramGroup.addEventListener("mouseover", instagramHover);
instagramGroup.addEventListener("mouseleave", instagramLeave);
