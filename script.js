"use:strict";
const addCla = function () {
  if (screen.width < 400) {
    // var menu = document.getElementsByClassName("nav-menu");
    // menu.classList.toggle("hidden");
    document.getElementById("MyElement").classList.add("hidden");
    document.getElementById("resize").style.maxWidth = "39rem";
    // document.getElementById("space").style.justifyContent = "space-around";
    document.getElementById("tech").style.padding = "5rem 2rem 0";
    document.getElementById("img-d").style.display = "none";
    document.getElementById("img-e").style.display = "none";
    document.getElementById("img-a").style.width = "27%";
    document.getElementById("img-b").style.width = "27%";
    document.getElementById("img-c").style.width = "27%";
  } else if (screen.width > 400) {
    document.getElementById("burger").style.display = "none";
  }
};
addCla();
