$(document).ready(function () {

    $('.mobile-menu-items').css('height', $(window).height - $('.nav-bar').height());
    let heroSize = $(window).height() - $('.nav').height();
    let hero = $('.hero');
    let heroBg = $('.hero-bg');
    resize(heroSize, hero, heroBg);

    let calloutSize = heroSize / 2;
    let callout = $('.callout');
    let calloutBg = $('.callout-bg');
    resize(calloutSize, callout, calloutBg);

    $(window).resize(function () {
        resize(heroSize, hero, heroBg);
        resize(calloutSize, callout, calloutBg);
    });

    function resize(target, parent, bg) {
        parent.css('min-height', target);
        bg.css('min-height', parent.innerHeight());
    }

    let plusSignSm = '<svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 24" xml:space="preserve" height="24px" width="24px"><polygon fill="#003359" points="19.2,9.6 14.4,9.6 14.4,4.8 14.4,0 9.6,0 9.6,4.8 9.6,9.6 4.8,9.6 0,9.6 0,14.4 4.8,14.4 9.6,14.4 9.6,19.2 9.6,24 14.4,24 14.4,19.2 14.4,14.4 19.2,14.4 24,14.4 24,9.6 "/></svg>';
    let plusSignMed = '<svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 38 24" xml:space="preserve" height="48px" width="48px"><polygon fill="#003359" points="19.2,9.6 14.4,9.6 14.4,4.8 14.4,0 9.6,0 9.6,4.8 9.6,9.6 4.8,9.6 0,9.6 0,14.4 4.8,14.4 9.6,14.4 9.6,19.2 9.6,24 14.4,24 14.4,19.2 14.4,14.4 19.2,14.4 24,14.4 24,9.6 "/></svg>';
    let plusSignLrg = '<svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="4 0 18 24" xml:space="preserve" height="64px" width="64px"><polygon fill="#003359" points="19.2,9.6 14.4,9.6 14.4,4.8 14.4,0 9.6,0 9.6,4.8 9.6,9.6 4.8,9.6 0,9.6 0,14.4 4.8,14.4 9.6,14.4 9.6,19.2 9.6,24 14.4,24 14.4,19.2 14.4,14.4 19.2,14.4 24,14.4 24,9.6 "/></svg>';
    $('.plus, .plus-sm').replaceWith(plusSignSm);
    $('.plus-md').replaceWith(plusSignMed);
    $('.plus-lg').replaceWith(plusSignLrg);

    $('.hamburger').click(function () {
            if ($(this).hasClass('is-active')){
                $(this).removeClass('is-active');
                $('.mobile-menu-items').slideUp(100);
            } else {
                $(this).addClass('is-active');
                $('.mobile-menu-items').slideDown(100);
            }
        });


    });