$(function () {
  $(".mv__slider").slick({
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

$(function () {
  var $slider = $(".style__slider");
  var slickInitialized = false; // 初期化フラグ

  function initSlick() {
    var winWidth = $(window).width();

    if (winWidth <= 767) {
      if (!slickInitialized) {
        $slider.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2500,
        });
        slickInitialized = true;
      }
    } else {
      if (slickInitialized) {
        $slider.slick("unslick"); // slickを破棄
        slickInitialized = false;
      }
    }
  }

  // 初回ロード時
  initSlick();

  // リサイズ時もチェック
  $(window).on("resize", function () {
    initSlick();
  });
});

// $(function () {
//   $(".style__slider").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true,
//     dots: false,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     variableWidth: true,
//   });
// });

// ハンバーガーメニュー
$(function () {
  $(".btn-trigger").on("click", function () {
    $(this).toggleClass("active");
  });
});
// nav opne
(function ($) {
  var $nav = $("#navArea");
  var $btn = $(".btn-trigger");
  var open = "open"; // class
  // menu open close
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
})(jQuery);
