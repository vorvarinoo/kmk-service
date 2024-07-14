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
    breakpoints: {
      320: {
        slidesPerView: 1.4,
      },
      992: {
        slidesPerView: 'auto',
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
