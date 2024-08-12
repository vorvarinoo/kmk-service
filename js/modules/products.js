import {
  isEscKey,
  breakpointChecker
} from './utils.js';


export const initModalCategories = () => {

  const modalNode = document.querySelector( '.categories-modal' );
  const modalTriggerNode = document.querySelector( '#categories' );

  const modalCloseNode = document.querySelector( '.categories-modal__close' );
  const listLinkCategories = document.querySelectorAll( '.categories-modal .categories__item a' );

  if ( !modalNode || !modalTriggerNode ) return;

  const onEscKeydown = ( evt ) => {
    if ( isEscKey( evt ) && modalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      closeModal();
      return;
    }
  };

  function openModal() {
    document.documentElement.classList.add( 'is-block-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'false' );
    document.addEventListener( 'keydown', onEscKeydown );
  }

  function closeModal() {
    document.documentElement.classList.remove( 'is-block-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'true' );
    document.removeEventListener( 'keydown', onEscKeydown );
  }

  listLinkCategories.forEach( ( elem ) => {
    elem.addEventListener( 'click', () => {

      setTimeout( closeModal, 200 );
    } );
  } );

  breakpointChecker( () => {
    closeModal();
  }, () => {} );

  modalTriggerNode.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    openModal();
  } );

  modalCloseNode.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    closeModal();
  } );
}
