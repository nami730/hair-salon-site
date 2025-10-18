$(function () {
  $(".slider").slick({
    autoplay: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true, // フェード切り替えにしたい場合
    speed: 900,
  });
});
