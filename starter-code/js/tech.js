"use strict";

const allBtns = document.querySelectorAll(".buttons-nav");
const allTechnoBody = document.querySelectorAll(".techno-body");
const pageBody = document.querySelector(".technology-page");
const allImgs = document.querySelectorAll(".techno-img");

allBtns.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault;
    console.log(e.target);
    if (!e.target.classList.contains("nav-button")) return;
    allTechnoBody.forEach((body) => body.classList.add("techno-hidden"));
    const getID = e.target.getAttribute("data-attr");
    console.log(getID);
    const section = document.querySelector(getID);
    console.log(section);
    section.classList.remove("techno-hidden");
  });
});

// function func(entries, observe) {
//   const [entry] = entries;
//   console.log(entry.target.clientWidth);
// }

// const intObserver = new IntersectionObserver(func, {
//   root: null,
//   threshold: 0,
// });

// intObserver.observe(pageBody);
window.addEventListener("orientationchange", function () {
  allImgs.forEach((img) => {
    if (document.body.clientWidth < "1280") {
      img.src = img.src.replace("portrait", "landscape");

      return;
    } else {
      img.src = img.src.replace("landscape", "portrait");
      return;
    }
  });
});
