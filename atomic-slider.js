//=include owl.carousel/dist/owl.carousel.min.js

function initSlider($, context) {
  var defaults = {
    items: 1,
    nav: true,
    navText: ['‹', '›']
  };

  $(context).find('[data-slider]').each(function() {
    var $this = $(this);
    var options = $.extend(defaults, $this.data('slider'));

    $this.addClass('owl-carousel owl-theme').owlCarousel(options);
  });
}
