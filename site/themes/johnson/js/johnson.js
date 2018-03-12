$(document).ready(function(){

    resize();
    $(window).resize(function(){
        resize();
    });

    function resize(){
        let heroSize = $(window).height();
        let calloutSize = heroSize / 2 + 100;
        let heroBg = $('.hero-bg');
        let hero = $('.hero');
        let calloutBg = $('.callout-bg');
        let callout = $('.callout');
        hero.css('height', heroSize);
        heroBg.css('height', heroSize);
        callout.css('height', calloutSize);
        calloutBg.css('height', calloutSize);
    }

    let plusSignSm = '<svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 24" xml:space="preserve" height="24px" width="24px"><polygon fill="#003359" points="19.2,9.6 14.4,9.6 14.4,4.8 14.4,0 9.6,0 9.6,4.8 9.6,9.6 4.8,9.6 0,9.6 0,14.4 4.8,14.4 9.6,14.4 9.6,19.2 9.6,24 14.4,24 14.4,19.2 14.4,14.4 19.2,14.4 24,14.4 24,9.6 "/></svg>';
    let plusSignMed = '<svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 38 24" xml:space="preserve" height="48px" width="48px"><polygon fill="#003359" points="19.2,9.6 14.4,9.6 14.4,4.8 14.4,0 9.6,0 9.6,4.8 9.6,9.6 4.8,9.6 0,9.6 0,14.4 4.8,14.4 9.6,14.4 9.6,19.2 9.6,24 14.4,24 14.4,19.2 14.4,14.4 19.2,14.4 24,14.4 24,9.6 "/></svg>';
    let plusSignLrg = '<svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="4 0 18 24" xml:space="preserve" height="64px" width="64px"><polygon fill="#003359" points="19.2,9.6 14.4,9.6 14.4,4.8 14.4,0 9.6,0 9.6,4.8 9.6,9.6 4.8,9.6 0,9.6 0,14.4 4.8,14.4 9.6,14.4 9.6,19.2 9.6,24 14.4,24 14.4,19.2 14.4,14.4 19.2,14.4 24,14.4 24,9.6 "/></svg>';  
    $('.plus, .plus-sm').replaceWith(plusSignSm);
    $('.plus-md').replaceWith(plusSignMed);
    $('.plus-lg').replaceWith(plusSignLrg);

});