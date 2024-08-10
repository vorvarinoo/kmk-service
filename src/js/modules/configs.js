const sliderConfig = {
  default: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
  },
  productsSlider: {
    spaceBetween: 30,
    watchSlidesProgress: true,
    freeMode: true,
    navigation: {
      nextEl: '.products .slider-btn-next',
      prevEl: '.products .slider-btn-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
      },
      992: {
        slidesPerView: 3,
      },
    }
  },
  fuelTypeSlider: {
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    autoHeight: true,
    speed: 1500,
    navigation: {
      nextEl: '.fuel-type .slider-btn-next',
      prevEl: '.fuel-type .slider-btn-prev',
    },
    breakpoints: {
      300: {
        slidesPerView: 1.7,
      },
      992: {
        slidesPerView: 5,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.9,
        },
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 50,
      },
    },

  },
  reviewsSlider: {
    loop: true,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: '.reviews .slider-btn-next',
      prevEl: '.reviews .slider-btn-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.4,
      },
      992: {
        slidesPerView: 2,
      },
    },
  },
  projectsSlider: {
    loop: true,
    navigation: {
      nextEl: '.projects-slider .slider-btn-next',
      prevEl: '.projects-slider .slider-btn-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 30,
        slidesPerView: 1.4,
        freeMode: true,
      },
      992: {
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: 'auto',
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.8,
        },
      },
    },
  },
};

const smoothScrollConfig = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false,
};

const modalConfig = {
  linkAttributeName: false,
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
};

const validateConfig = {
  justValidate: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--error)',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
    },
    errorFormClass: 'shaked',
    errorTimeout: 1500,
  },
  errorTimeout: 1500,
  mask: {
    bodyMask: ' (___) ___ __ __',
  }
};

const observerConfig = {
  scrollTop: {
    rootMargin: '600px',
    threshold: 1,
  },
};

const requestsConfig = {
  handlerURL: 'https://jsonplaceholder.typicode.com/posts',
};

export {
  sliderConfig,
  smoothScrollConfig,
  modalConfig,
  validateConfig,
  observerConfig,
  requestsConfig,
};
