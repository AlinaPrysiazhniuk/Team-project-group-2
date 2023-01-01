$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: false,
  infinite: true,
});

$('.single-item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  speed: 300,
  asNavFor: '.autoplay',
});