var swiper = new Swiper('.mySwiper', {
  speed: 1000,
  breakpoints: {
    1367: {
      slidesPerView: 5,
    },
    1025: {
      slidesPerView: 4,
    },
    769: {
      slidesPerView: 3,
    },
    681: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper2 = new Swiper('.mySwiper2', {
  speed: 1000,
  breakpoints: {
    769: {
      slidesPerView: 3,
    },
    681: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper3 = new Swiper('.mySwiper3', {
  speed: 1000,
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
    769: {
      slidesPerView: 3,
    },
    681: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
  slidesPerGroup: 1,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
