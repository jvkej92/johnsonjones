//Scroll animations
    
    //Triggers the fade in of the navigation on scroll
    //Controls the fade in and out of the chevron
$(window).scroll(function () { 
    let windowPos = $(window).scrollTop();
    let bannerSize = $('.banner, .hero').height();
    
    if (windowPos > bannerSize - 130) {
        $('.nav').css('position', 'fixed').addClass('nav-scroll');
        changeIconColor('.nav-logo img, .share-icon', 'white', 'navy');
    } else if (windowPos < bannerSize) {
        $('.nav').css('position', 'absolute').removeClass('nav-scroll');;
        changeIconColor('.nav-logo img, .share-icon', 'navy', 'white');
    }

    if (windowPos > 110) {
        $('.hero-chevron img').fadeOut(500);
    }
    if (windowPos < 90) {
        $('.hero-chevron img').fadeIn(500);
    }
});

function changeIconColor(target, oldColor, newColor){
    $(target).each(function(){
        let old = $(this).attr('src');
        $(this).attr('src', old.replace(oldColor, newColor));
    });
}
