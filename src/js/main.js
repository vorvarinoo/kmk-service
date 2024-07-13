import {
  iosVhFix,
} from './modules/utils.js';

import {
  validateForms,
} from './modules/validate.js';

import {
  initModals,
} from './modules/modal.js';

import {
  initSliders,
} from './modules/slider.js';

import {
  initScrollTop,
} from './modules/scroll-top.js';

import './modules/accordion.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener( 'load', () => {
    validateForms();
    initModals();
    initSliders();
    initScrollTop();
  } );
} );
