$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

$(function () {
  'use strict'

  $('.nav-link__mobile').on('click', function () {
    $('.offcanvas-collapse').removeClass('open')
  })
  parallaxOnMouseMove($('.main-text'))
})


let ubicationP = window.pageYOffset;
window.onscroll = function(){
  let ScrollA = window.pageYOffset;
  if(ubicationP >= ScrollA){
    document.getElementById('navbar').style.top = '0';
  }
  else{
    document.getElementById('navbar').style.top = '-100px';
  }
  ubicationP = ScrollA;
}


$(".hamburger").on("click", function () {
  if (!$(this).hasClass("is-active")) {
    $(this).addClass("is-active")
    $('html').css('overflow', 'hidden ');
  } else {
    $('html').css('overflow', 'hidden auto');
    $(this).removeClass("is-active")
  }
});


// // Menú fixed
// $(window).scroll(function () {
//   if ($(document).scrollTop() > 70 && ($(window).width() >= 0)) {
//     $('.navbar-fixed-js').addClass('fixed');
//     $('.navbar-brand').addClass('navbar-brand-fixed');
//     // $("#iso").removeClass('img-size').attr('src', 'assets/img/logo.svg').removeClass('scroll-up');


//   } else {
//     $('.navbar-fixed-js').removeClass('fixed');
//     $('.nav-link').removeClass('fixed-color');
//     $('.navbar-brand').removeClass('navbar-brand-fixed');
//     // $("#iso").addClass('img-size').attr('src', 'assets/img/logo.png').removeClass('scroll-up');

//   }
// });

//menu drop
$(document).ready(function () {
  $('.navbar .dropdown').hover(function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
  }, function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
  });
});




// menu hambuger

( function( $ ) {
  const $document = $(document);
  const initTyped = (selector, options) => {
   let settings = options;
   if (!settings) {
    settings = {
     stringsElement: '#typed-content',
     typeSpeed: 60,
     backSpeed: 40,
     loop: true,
     showCursor: true
    };
   }
   
   let typed = new Typed(selector, settings);
  }
  $document.ready(() => {
   console.log('ready');
   
   initTyped('.js-typed');
  });
 })(jQuery);
   setTimeout(function () {
     that.tick();
   }, delta);

 function parallaxOnMouseMove(elem) {
  elem.closest('section').mousemove(function (event) {
    elem.closest('section').css({
      'background-position': `${(($(window).width() / 2) - event.pageX) * .002}px, ${(($(window).width() / 2) - event.pageY) * .002}px`
    })
    elem.css({
      transform: `translate(${(($(window).width() / 2) - event.pageX) * .005}px, ${(($(window).width() / 2) - event.pageY) * .005}px)`
    })
  })
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
