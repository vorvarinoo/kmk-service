import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '.products-slider', sliderConfig.productsSlider );
  initSlider( '.fuel-type-slider', sliderConfig.fuelTypeSlider );
  initSlider( '.reviews-slider', sliderConfig.reviewsSlider );
  initSlider( '.projects-slider', sliderConfig.projectsSlider );
};

export {
  initSliders,
};
