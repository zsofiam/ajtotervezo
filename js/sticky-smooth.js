$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
        }
        if($('#mobil_menu').hasClass('dl-menuopen') && $(window).height() < $('#mobil_menu').height()){
            $('header').removeClass('sticky');
        }
    });
});
