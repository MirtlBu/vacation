

$(function() {
    $('.schedule').on('mouseenter', '.schedule__item', function() {
       $(this).addClass('schedule__item--shifted');
    });
    $('.schedule').on('mouseleave', '.schedule__item', function() {
       $(this).removeClass('schedule__item--shifted');
    })
});