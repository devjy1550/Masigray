// html,css,js 로딩완료
$(document).ready(function () {
  // 메인메뉴기능
  let header = $('.header');
  let header_top = $('.header-top');
  let header_main = $('.header-main');
  let gnb = $('.gnb');
  gnb.mouseenter(function () {
    header_main.addClass('header-main-show');
  });
  gnb.mouseleave(function(){
    header_main.removeClass('header-main-show'); 
  });
  //스크롤시 기능
  $(window).scroll(function () {
    //스크롤바의 위치를 파악한다.
    let temp = $(window).scrollTop();
    // .header-top 숨기기
    if (temp > 0) {
      header.addClass('header-fix');
      header_top.addClass('header-top-close')
    } else {
      header.removeClass('header-fix');
      header_top.removeClass('header-top-close')
    }




  });
});

// html,css,js 멀티미디어까지 로딩완료
window.onload = function () {
  // visual 슬라이드
  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      prevEl: '.sw-visual-prev-btn',
      nextEl: '.sw-visual-next-btn'
      // preview Element란얘기
    }
  });
  // S에 소문자금지 무조건대문자


  //items 슬라이드
  new Swiper('.sw-items', {
    loop: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false
    },
    navigation: {
      prevEl: '.sw-items-prev',
      nextEl: '.sw-items-next'
    },
    pagination: {
      el: '.sw-itmes-pgnt',
      clickable: true,
    },
  });


  new Swiper('.sw-beverage', {
    loop: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false
    },
    navigation: {
      prevEl: '.sw-beverage-prev',
      nextEl: '.sw-beverage-next'
    },
    pagination: {
      el: '.sw-beverage-pgnt',
      type: 'fraction',
      //이걸 꼭 쳐줘야지 숫자로 페이지네이션이 바뀐다!!!
      // clickable: true,
    },
  });
}