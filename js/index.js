let burgerMenu = document.querySelector(".header__burger-menu"),
  leftContent = document.querySelector(".left__column"),
  rightContent = document.querySelector(".right__column");
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 601px)").matches) {
    leftContent.classList.remove("left__active");
    rightContent.classList.remove("right__active");
    burgerMenu.classList.remove("active__burger");
    document.body.classList.remove("active__body");
  }
});
burgerMenu.addEventListener("click", () => {
  leftContent.classList.toggle("left__active");
  rightContent.classList.toggle("right__active");
  burgerMenu.classList.toggle("active__burger");
  document.body.classList.toggle("active__body");
});

new Glide('.glide').mount()