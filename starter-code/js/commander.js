// const crewSection = document.querySelector(".crew-section");
const sliders = document.querySelector(".slider-icons");
const crews = document.querySelectorAll(".crews");
const crewImg = document.querySelector(".crew-image");
const allSliders = document.querySelectorAll(".slider-icon");

sliders.addEventListener("click", function (e) {
  console.log("working");
  if (!e.target.classList.contains("slider-icon")) return;
  allSliders[0].classList.remove("default");
  crews.forEach((crew) => crew.classList.add("commander-hidden"));
  const getAttr = e.target.getAttribute("data-key");
  const currentCrew = document.querySelector(getAttr);
  currentCrew.classList.remove("commander-hidden");

  allSliders.forEach((slider) => slider.classList.remove("slider-active"));

  e.target.classList.add("slider-active");
});
