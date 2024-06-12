const headerHeight = document.querySelector("header").offsetHeight;

const sticky = () => {
  if (window.pageYOffset > 100) {
    document.querySelector("nav").classList.add("nav-fixed");
    document.querySelector("nav").classList.remove("navbar-dark");
    document.querySelector("nav").classList.add("navbar-light");
  }

  if (window.pageYOffset < 100) {
    document.querySelector("nav").classList.remove("nav-fixed");
    document.querySelector("nav").classList.add("navbar-dark");
    document.querySelector("nav").classList.remove("navbar-light");
  }

  /* Demo purposes only */
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);
  // if (window.pageYOffset > headerHeight) {
  //   document.querySelector("nav").classList.add("bg-white");
  // }

  // if (window.pageYOffset < headerHeight) {
  //   document.querySelector("nav").classList.remove("bg-white");
  // }
}

