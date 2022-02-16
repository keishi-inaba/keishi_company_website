/*
ハンバーガメニュー
*/

$('.open-btn').click(function() {
  $(this).toggleClass('active');
  $('#open-navi').toggleClass('panel');
  $('.bg').toggleClass('circleactive');
});

$('#open-navi a').click(function() {
  $('.open-btn').removeClass('active');
  $('#open-navi').removeClass('panel');
  $('.bg').removeClass('circleactive');
})


/*
スクロールダウン
*/

function ScrollTimeline() {
  $('.timeline li').each(function() {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowH = $(window).height();
    var startP = 400;

    if(scroll >= elemPos - windowH - startP) {
      var h = $(this).outerHeight(true)
      var percent = (scroll + startP - elemPos) / (h/2) * 100;

      if(percent > 100) {
        percent = 100;
      }
      $(this).children('.border-line').css({
        height: percent + "%",
      });
    }
  });
}

/*
アコーディオン
*/

$('.title').on('click', function() {
  $('.box').slideUp(500);

  var elem = $(this).next('.box');
  if($(this).hasClass('close')) {
    $(this).removeClass('close');
  } else {
    $('.close').removeClass('close');
    $(this).addClass('close');
    $(elem).slideDown(500);
  }
});


/*
ページトップリンク
*/

function PageTopAnime() {

  var scroll = $(window).scrollTop();
  if(scroll >= 200) {
    $('.top').removeClass('DownMove');
    $('.top').addClass('UpMove');
  } else {
    if($('.top').hasClass('UpMove')) {
      $('.top').removeClass('UpMove');
      $('.top').addClass('DownMove');
    }
  }

  var wH = window.innerHeight;
  var fP = $('#footer').offset().bottom;
  if(scroll + wH >= (fP + 5)) {
    var pos = (scroll + wH) - fP + 5
    $('.top').css('bottom', pos);
  } else {
    if($('.top').hasClass('UpMove')) {
      $('.top').css('bottom', '5px');
    }
  }
}

$('.top').click(function() {
  $('body, html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

/*
ニュースティッカー
*/

var slider;
var sliderFlag = false;
var breakpoint =768;

function sliderSet() {
  var windowW = window.innerWidth;
  if(windowW >= breakpoint && !sliderFlag) {
    slider = $('.slider').bxSlider({
      touchEnabled: false,
      mode: 'vertical',
      controls: false,
      auto: 'true',
      pager: false
    });
    sliderFlag = true;
  } else if(windowW < breakpoint && sliderFlag) {
    slider.destroySlider();
    slider = false;
  }
}

/*
テキストタイピング
*/

$(function() {
  $('#typed').typed({
    strings: ["Providing valuable services<br>Developing human resources for the future<br>Creating the Future of Japan"],
    typeSpeed: 30,
    startDelay: 0,
    backSpeed: 30,
    backDelay: 500,
    loop: true,
    loopCount: 3,
    cursorChar: "|",
    contentType: "html"
  });
});

/*
フェードアップアニメーション
*/

function fadeUp() {
  $('.fadeUpT').each(function() {
    var elem = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowH = $(window).height();
    if(scroll >= elem - windowH) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    } 
  });
}



/*
画面スクロールしたら動作
*/

$(window).on('scroll', function() {
  ScrollTimeline();
  PageTopAnime();
  fadeUp();
});

$(window).on('load resize', function() {
  sliderSet();
})

$(window).on('load', function() {
  fadeUp();
})



