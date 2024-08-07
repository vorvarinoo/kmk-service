import {
  iosVhFix,
} from './modules/utils.js';

import {
  initHeaderMenu
} from './modules/header.js';

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

import {
  initYTubeVideo
} from './modules/yt-video.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener( 'load', () => {
    validateForms();
    initModals();
    initSliders();
    initScrollTop();
    initYTubeVideo();
    initHeaderMenu();
  } );
} );
