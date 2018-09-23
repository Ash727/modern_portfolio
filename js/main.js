// Select DOM items

const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
//Set Initial State of menu
let showMenu = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  console.log("clicked");

  if (!showMenu) {
    console.log("true so now its false ");
    menuButton.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    console.log("false so now its true ");
    menuButton.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }

  //   if (!showMenu) {
  //     console.log("true so now its false ");
  //     menuButton.classList.add("close");
  //     menu.classList.add("show");
  //     menuNav.classList.add("show");
  //     menuBranding.classList.add("show");
  //     navItems.forEach(item => item.classList.add("show"));
  //     showMenu = true;
  //   } else if (showMenu == true) {
  //     menuButton.classList.remove("close");
  //     menu.classList.remove("show");
  //     menuNav.classList.remove("show");
  //     menuBranding.classList.remove("show");
  //     navItems.forEach(item => item.classList.remove("show"));
  //     show = false;
  //     alert("clicked remove");
  //   }
}
