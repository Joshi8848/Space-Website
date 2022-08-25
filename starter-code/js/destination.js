"use strict";

const allPlanets = document.querySelector(".planet-navigation");
const allPlanetsInfo = document.querySelectorAll(".planet-info");
const img = document.querySelector(".planet-image");


allPlanets.addEventListener("click", function (e) {
  e.preventDefault;
  if (!e.target.classList.contains("planet-link")) return;
  console.log(e.target);
  allPlanetsInfo.forEach((planet) => {
    planet.classList.add("hidden");
  });

  const name = e.target.getAttribute("href");
  const planet = document.querySelector(name);
  planet.classList.remove("hidden");

  if (name === "#moon-info") {
    img.src = "../assets/destination/image-moon.webp";
  } else if (name === "#mars-info") {
    img.src = "../assets/destination/image-mars.webp";
  } else if (name === "#europa-info") {
    img.src = "../assets/destination/image-europa.webp";
  } else if (name === "#titan-info") {
    img.src = "../assets/destination/image-titan.webp";
  }
});
