
let drop1 = document.querySelector("#cancel");
let drop = document.querySelector(".navbarlist ul");
let activeNav = document.querySelector(".activeNav a");
if (activeNav.textContent !== 'ECX Team' && activeNav.textContent !== 'Story Team') activeNav.href = "#";

document.querySelector("#burger").addEventListener("click", function () {
  document.querySelector("#burger").style.display = "none";
  drop1.style.display = "flex";
  drop.style.transform = "translateY(0)";
});
document.querySelector(".dropdown").addEventListener("click", function () {
  document.querySelectorAll(".drop13")[0].classList.toggle("drop-show");
  document.querySelectorAll(".dropdown img")[0].classList.toggle("arrow-rt");
});
drop1.addEventListener("click", function () {
  document.querySelector("#burger").style.display = "block";
  drop1.style.display = "none";
  drop.style.transform = "translateY(-100vh)";
});
document.querySelector('.arrow').parentElement.setAttribute("target", "_self");

