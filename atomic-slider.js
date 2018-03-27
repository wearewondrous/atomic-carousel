//=include owl.carousel/dist/owl.carousel.min.js

function initSlider($, context) {
  $(context).find("[data-slider]").each(function() {
    var $this = $(this),
        defaults = {
          items: 1,
          nav: true,
          navText: ['‹', '›']
        },
        options = Object.assign({}, defaults, $this.data('slider'));
    $this.addClass('owl-carousel owl-theme').owlCarousel(options);
  });
}
