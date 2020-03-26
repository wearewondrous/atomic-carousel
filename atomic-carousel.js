//=include owl.carousel/dist/owl.carousel.min.js

function initCarousel($, context) {
  var $carousels = $(context).find('[data-carousel]');

  if (!$carousels.length) {
    return;
  }

  $carousels.each(function() {
    var defaults = {
      items: 1,
      nav: true,
      navText: ['‹', '›'],
      navElement: 'span' // @TODO: Switch to 'button' once better supported.
    };
    var $owl = $(this);
    var options = $.extend(defaults, $owl.data('carousel'));

    $owl.owlCarousel(options);

    $owl.on('click', '.owl-item', function() {
      var owl = $owl.data('owl.carousel');

      $owl.trigger('to.owl.carousel', owl.relative($(this).index()));
    });
  });
}
