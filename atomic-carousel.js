//=include owl.carousel/dist/owl.carousel.min.js

function initCarousel($, context) {
  var defaults = {
    items: 1,
    nav: true,
    navText: ['‹', '›']
  };

  $(context).find('[data-carousel]').each(function() {
    var $this = $(this);
    var options = $.extend(defaults, $this.data('carousel'));

    $this.addClass('owl-carousel owl-theme').owlCarousel(options);
  });
}
