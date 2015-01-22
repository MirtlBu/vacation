$(function() {

    $('.schedule').on('mouseenter', '.schedule__item', function() {
       $(this).addClass('schedule__item--shifted');
    });
    $('.schedule').on('mouseleave', '.schedule__item', function() {
       $(this).removeClass('schedule__item--shifted');
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > $('.opening').height()){
            $('header').addClass('sticky');
            $('.schedule').addClass('debounce');
        }
        else {
            $('.schedule').removeClass('debounce');
            $('header').removeClass('sticky');
        }
    });

    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    $('.gallery').on('click', '.gallery__item', function() {
        $('.modal-overlay').addClass('showed');
        $('body').addClass('scrolldisable');
    });

    $('.modal-overlay').on('click', '.close', function() {
        $('.modal-overlay').removeClass('showed');
        $('body').removeClass('scrolldisable');
    })

});


