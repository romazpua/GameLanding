jQuery(document).ready(function ($) {


    $("#uptotop").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 1000) {
            $('#uptotop').fadeIn(500)
        } else if ($(window).scrollTop() < 1000) {
            $('#uptotop').fadeOut(500)
        }
    })


});
