"use strict";

// const allLinks = document.querySelectorAll(".nav-link");
// const links = document.querySelector(".nav-links");

// links.addEventListener("click", function (e) {
//   e.preventDefault;
//   if (!e.target.classList.contains("header-nav")) return;
//   allLinks.forEach((link) => link.classList.remove("active"));
//   const parent = e.target.parentElement;
//   console.log(parent);
//   parent.classList.add("active");
// });

const exploreBtn = document.querySelector(".explore-button");
const hamburgerOpenContainer = document.querySelector(".hamburger-menu");
const hamburgerOpenIcon = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");
let icon = false;
let hamburgerCloseIcon;
// exploreBtn.addEventListener("click", () => {
//   console.log("fk");
//   location.assign("../html/destination-moon.html");
// });
let logic = true;
console.log(hamburgerOpenContainer);

hamburgerOpenContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-bars")) {
    if (!icon) {
      const val = '<i class="fa-solid fa-square-xmark"></i>';
      hamburgerOpenContainer.insertAdjacentHTML("beforeend", val);
      icon = true;
    }
    hamburgerCloseIcon = document.querySelector(".fa-square-xmark");
    hamburgerOpenIcon.style.display = "none";
    hamburgerCloseIcon.style.display = "block";
    navLinks.style.opacity = "1";
    navLinks.style.pointerEvents = "auto";
    navLinks.style.visibility = "visible";
    navLinks.style.transform = "translateX(0)";
  }

  if (e.target.classList.contains("fa-square-xmark")) {
    if (logic) {
      closeMenu(hamburgerCloseIcon);
    }
  }
});

function closeMenu(hamburgerCloseIcon) {
  hamburgerCloseIcon.addEventListener("click", (e) => {
    logic = false;
    hamburgerCloseIcon.style.display = "none";
    hamburgerOpenIcon.style.display = "block";
    navLinks.style.opacity = "0";
    navLinks.style.pointerEvents = "none";
    navLinks.style.visibility = "hidden";
    navLinks.style.transform = "translateX(100%)";
  });
}
