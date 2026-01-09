var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  speed: 700,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1440: {
      slidesPerView: 6,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    767: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    479: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    374: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});




$(".fqa-main .heading p").hide();
$(".fqa-main .heading.active p").show();
$(".fqa-main .heading .qa-1").on("click", function () {

  let parent = $(this).closest(".heading");
  if (parent.hasClass("active")) {
    return;
  }

  $(".fqa-main .heading")
    .removeClass("active")
    .find("p")
    .slideUp();

  parent.addClass("active");
  parent.find("p").slideDown();
});



    const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navlinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});