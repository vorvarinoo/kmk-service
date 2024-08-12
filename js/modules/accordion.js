if ( document.querySelector( '.services-accordion' ) ) {
  const servicesAccordion = new JustAccordion( '.services-accordion', {
    showFirst: true,
    showOnlyOne: true,
  } );
}

if ( document.querySelector( '.product-accordion' ) ) {
  const productAccordion = new JustAccordion( '.product-accordion', {
    // speed: 1000,
    openItems: [ 0, 3 ]
  } );
}
