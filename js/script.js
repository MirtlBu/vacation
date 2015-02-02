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
    });

    (function() {
        var prevPos = 0,
            galleryTop = $('header').offset().top,
            animating = false,
            moveTo = function(top) {
                animating = true;
                $('html, body').animate({ scrollTop: top }, 'slow');
                setTimeout(function() {
                    animating = false;
                }, 1000);
            };

        $('body').on('mousewheel DOMMouseScroll', function(e) {
            var pos = $(window).scrollTop();
            if(animating) {
                prevPos = pos;
                return false;
            }
            if(pos < galleryTop && pos > 0){
                moveTo(pos > prevPos ? galleryTop : 0);
            }
            prevPos = pos;
        });

        $(window).on('resize', function() {
            galleryTop = $('header').offset().top;
        });
    })();

});


