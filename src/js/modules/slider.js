import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '.products-slider', sliderConfig.productsSlider );
};

export {
  initSliders,
};
