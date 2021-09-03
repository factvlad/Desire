$(function () {
  $(".header__btn").on("click", function () {
    $("div .rightside-menu").removeClass("rightside-menu--close");
  });

  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  $(".contact-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10,
  });

  $(".article-slider__box").slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/arrow-slide-left.svg" alt="arrow-slide"></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/arrow-slide-right.svg" alt="arrow-slide"></button>',
  });



 



  var mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
  });
});

// function showRightMenuBar() {
//   document.querySelector(".rightside-menu").classList.remove("rightside-menu--close");
// }

// document.querySelector(".header__btn").onclick = showRightMenuBar;

//  function closeRightMenuBar() {
//     document.querySelector(".rightside-menu").classList.add("rightside-menu--close");
//   }

//   document.querySelector(".rightside-menu__close").onclick = closeRightMenuBar;

//   function showRightMenuBar() {
//     document.querySelector(".rightside-menu").classList.remove("rightside-menu--close");
//   }

//   document.querySelector(".header__btn").addEventListener('click', showRightMenuBar);

//  function closeRightMenuBar() {
//     document.querySelector(".rightside-menu").classList.add("rightside-menu--close");
//   }

//   document.querySelector(".rightside-menu__close").addEventListener('click', closeRightMenuBar);
