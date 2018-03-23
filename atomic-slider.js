//=include owl.carousel/dist/owl.carousel.min.js

function initSlider(context) {
  $(context).find("[data-slider]").each(function() {
    var $this = $(this);
    $this.addClass('owl-carousel').owlCarousel($this.data('slider'));
  });
}
