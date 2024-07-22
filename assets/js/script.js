let menu = document.querySelector(".nav-list");
let menuToggler = document.querySelector(".nav-toggler");

menuToggler.addEventListener("click", function () {
  toggleMenu();
});

document.addEventListener("click", function (e) {
  if (
    menu.classList.contains("show") &&
    !e.target.closest(".nav-toggler")
  ) {
    toggleMenu("hide");
  }
});

function toggleMenu(type) {
  if (type == "hide") {
    menu.classList.remove("show");
    menuToggler.classList.remove("show");
    return;
  }
  menu.classList.toggle("show");
  menuToggler.classList.toggle("show");
}
