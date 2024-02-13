// top-nav controller
window.addEventListener("scroll", function () {
  var gnbNav = document.getElementById("header-wrapper");
  var scrollY = window.scrollY;

  if (scrollY >= 45) {
    gnbNav.classList.add("on");
  } else {
    gnbNav.classList.remove("on");
  }
});

const closeButton = document.getElementById("sp-menu-close-btn");
const menuBar = document.getElementById("mobile-menu-bar");
const menuBg = document.getElementById("sp-menu-bg");
const menuItems = document.getElementById("sp-menu-wrapper");

// menu open & close
function openMenuBar() {
  menuBg.style.display = "block";
  menuItems.style.display = "block";
  closeButton.style.display = "block";
}

function closeMenuBar() {
  menuBg.style.display = "none";
  menuItems.style.display = "none";
  closeButton.style.display = "none";
}

menuBar.addEventListener("click", openMenuBar);
menuBg.addEventListener("click", closeMenuBar);
closeButton.addEventListener("click", closeMenuBar);
