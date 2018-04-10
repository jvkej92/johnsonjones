let viewHeight = window.innerHeight;
let heroContent = $(".hero-content-wrapper");
let hero = $(".hero, .hero-bg");
let bannerContent = $(".banner-content-wrapper");
let banner = $(".banner, .banner-bg");
let calloutContent = $(".callout-content-wrapper");
let callout = $(".callout, .callout-bg");

setHeroSize(bannerContent, banner, .55);
setHeroSize(calloutContent, callout, .45);

$(window).resize(function () {
    setHeroSize(heroContent, hero, .8);
    setHeroSize(bannerContent, banner, .55);
    setHeroSize(calloutContent, callout, .45);
});

function setHeroSize(content, parent, ratio){
    content.css('min-height', viewHeight * ratio);
    parent.css('min-height', (viewHeight * ratio) + 200);
}


