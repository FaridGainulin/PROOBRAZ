function initSwiperFinances() {
  const swiper = new Swiper('.swiper-finances', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.finances-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperPresent() {
  const swiper = new Swiper('.swiper-present', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.present-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperStart() {
  const swiper = new Swiper('.swiper-start', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.start-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperInvest() {
  const swiper = new Swiper('.swiper-invest', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.invest-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperDesktop2() {
  const swiper = new Swiper('.swiper-desktop', {
    speed: 550,
    rewind: true,
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.desktop-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.button-prev',
      nextEl: '.button-next',
    },
    breakpoints: {
      200: {
        spaceBetween: 12,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 12,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 12,
        slidesPerView: 3,
      },
      1400: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
  })
}

$(document).ready(function () {
  initSwiperFinances()
  initSwiperPresent()
  initSwiperStart()
  initSwiperInvest()
  initSwiperDesktop2()
})
