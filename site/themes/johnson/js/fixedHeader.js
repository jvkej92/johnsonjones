//Scroll animations
    
    //Triggers the fade in of the navigation on scroll
    //Controlls the fade in and out of the chevron
$(window).scroll(function () { 
    let windowPos = $(window).scrollTop();
    let bannerSize = $('.banner').height();
    if (windowPos > bannerSize - 130) {
        $('.nav').css('position', 'fixed').addClass('nav-scroll');
        $('.nav-logo img').attr('src', '../assets/img/johnsonJonesLogoNavy.png')
    } else if (windowPos < bannerSize) {
        $('.nav').css('position', 'absolute').removeClass('nav-scroll');;
        $('.nav-logo img').attr('src', '../assets/img/johnsonJonesLogoWhite.png')
    }

    if (windowPos > 110) {
        $('.hero-chevron img').fadeOut(500);
    }
    if (windowPos < 90) {
        $('.hero-chevron img').fadeIn(500);
    }
});
