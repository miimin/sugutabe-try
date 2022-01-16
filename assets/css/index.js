$(function () {

  const img_src = ["assets/images/daikon.png", "assets/images/paprika.png", "assets/images/corn.png", "assets/images/potato.png", "assets/images/tomato.png"];
  let number = -1;


  function slide_time() {
    if (number === 4) {
      number = 0;
    } else {
      number++;
    }
    document.getElementById("top-slide").src = img_src[number];
  }

  $(function () {
    var script = $('<script>').attr({
      'type': 'text/javascript',
      'src': 'assets/css/graph-data.json'
    });
    $('body')[0].appendChild(script[0]);
  });
  //ファイルの記述がおかしいエラーが出る。わかめ


  /*
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie-graph'),
    renderer: 'svg', // 描画形式
    loop: false, // trueにしたらループ。1回再生の場合はfalse
    autoplay: true, // 自動再生
    path: 'graph-data.json'
  });
  var anim = lottie.loadAnimation(params);
  */

  setInterval(slide_time, 3000);
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
  })

  $("header a,.tomato-button a").click(function () {
    var id = $(this).attr("href");
    var header_height = $("header").height();
    var adjust = 0; //px分スラしたくなったら数字入れる
    var position = $(id).offset().top - header_height + adjust;
    $("html, body").animate({
      "scrollTop": position
    }, 500, "swing");
    return false;
  });

});