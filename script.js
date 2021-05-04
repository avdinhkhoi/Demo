const menuIcon = document.querySelector(".navmenu");
const navBar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("change");
});