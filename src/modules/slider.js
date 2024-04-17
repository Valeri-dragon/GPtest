const sliderModule = () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    //direction: "horizontal",
    loop: true,
    autoplayslidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1560: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
      1300: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 1,
      },
    },
    // If we need pagination

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
       clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
};
export default sliderModule;
