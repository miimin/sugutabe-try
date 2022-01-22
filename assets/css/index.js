$(function () {

  $(".hamburger").click(function () {
    $(this).toggleClass('hamburger-active');
    $(".hamburger-menu").toggleClass("menu-active");
    /*$('ul li').hide(); //隠しておいて
    $('ul li').each(function (i) {
      $(this).delay(80 * i).fadeIn(400); //それぞれフェードイン
    });*/
  });
  $(".hamburger-menu a").click(function () {
    $(".hamburger").removeClass('hamburger-active');
    $(".hamburger-menu").removeClass('menu-active'); //ナビゲーションのpanelactiveクラスも除去
  });
  $("header a,.tomato-button a").click(function () {
    var id = $(this).attr("href");
    var header_height = $("header").height();
    var adjust = 0; //px分スラしたくなったら数字入れる
    var position = $(id).offset().top - header_height + adjust;
    $("html, body").animate({
      "scrollTop": position
    }, 600, "swing");
    return false;
  });


  const img_src = ["assets/images/daikon.png", "assets/images/paprika.png", "assets/images/corn.png", "assets/images/potato.png", "assets/images/tomato.png"];
  let number = -1;


  function slide_time() {
    if (number === 4) {
      number = 0;
    } else {
      number++;
    }
    document.getElementById("top-slide").src = img_src[number];
  };

  setInterval(slide_time, 3000);
  //
  //
  //
  var image = document.querySelectorAll('.bg-yasai');
  new simpleParallax(image, {
    overflow: "true",
    scale: 1.5
  });
  var image = document.querySelectorAll('.bg-yasai2');
  new simpleParallax(image, {
    overflow: "true",
    scale: 1.4,
    orientation: 'down'
  }, );

  //
  $(".section-season__list-item").click(function () {
    $(".season-beg", this).slideToggle();
    var $name = $(this).find(".season-name");
    var $beg = $(this).find(".season-beg");
    if ($beg.hasClass("open")) { //.Aがopenを持っている
      $beg.removeClass("open"); //.openを消す       
      $(this).find(".triafter").removeClass("triafter");
      $(this).find(".spring-triafter").removeClass("spring-triafter"); //下三角にする
    } else { //.Aがopenを持たない
      $beg.addClass("open");
      $(this).find(".triangle").addClass("triafter");
      $(this).find(".spring-triangle").addClass("spring-triafter"); //上三角にする
    }
  });
  //

  //
  //QA押したとき
  $(".section-QA__list-item").click(function () {
    var $answer = $(this).find(".A");
    var $question = $(this).find(".Q");
    if ($answer.hasClass("open")) { //.Aがopenを持っている
      $answer.removeClass("open"); //.openを消す
      $answer.slideUp(400);
      setTimeout(function () {
        $question.css("border-radius", "8px 8px");
      }, 386); //Q下の角丸;
      $(this).find(".triafter").removeClass("triafter"); //下三角にする
    } else { //.Aがopenを持たない
      $answer.addClass("open");
      $answer.slideDown(400);
      setTimeout(function () {
        $question.css("border-radius", "8px 8px 0 0");
      }, 10); //Q下の角丸解除
      $(this).find(".triangle").addClass("triafter"); //上三角にする
    }
  });


  $('#regular-sp').slick({
    dots: false,
    accessibility: true,
    pauseOnHover: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    adaptiveHeight: true,
    prevArrow: '<img src="assets/images/arrowleft.svg" class="slide-arrow prev-arrow" alt="前へ">',
    nextArrow: '<img src="assets/images/arrowright.svg" class="slide-arrow next-arrow" alt="次へ">',
  });
  $('#farmar-sp').slick({
    dots: true,
    accessibility: true,
    pauseOnHover: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    adaptiveHeight: true,
    prevArrow: '<img src="assets/images/arrowleft.svg" class="slide-arrow prev-arrow" alt="前へ">',
    nextArrow: '<img src="assets/images/arrowright.svg" class="slide-arrow next-arrow" alt="次へ">',
  });
  $('#voice-sp').slick({
    dots: true,
    accessibility: true,
    pauseOnHover: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    adaptiveHeight: true,
    prevArrow: '<img src="assets/images/arrowleft.svg" class="slide-arrow prev-arrow" alt="前へ">',
    nextArrow: '<img src="assets/images/arrowright.svg" class="slide-arrow next-arrow" alt="次へ">',
  });

  //↓360以下のときviewportを書き換えるやつ らしい
  !(function () {
    const viewport = document.querySelector('meta[name="viewport"]');

    function switchViewport() {
      const value =
        window.outerWidth > 360 ?
        'width=device-width,initial-scale=1' :
        'width=360';
      if (viewport.getAttribute('content') !== value) {
        viewport.setAttribute('content', value);
      }
    }
    addEventListener('resize', switchViewport, false);
    switchViewport();
  })();
});