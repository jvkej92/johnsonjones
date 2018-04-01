let viewHeight = window.innerHeight;
let heroContent = $(".hero-content-wrapper, hero-content");
let hero = $(".hero, .banner");
let calloutContent = $(".callout-content-wrapper");
let callout = $(".callout, .callout-bg");



setHeroSize(heroContent, hero, .5);
setHeroSize(calloutContent, callout, .45);

$(window).resize(function () {
    setHeroSize(heroContent, hero, .5);
    setHeroSize(calloutContent, callout, .5);
});

function setHeroSize(content, parent, ratio){
    debugger;
    content.css('min-height', viewHeight * ratio);
    parent.css('min-height', (viewHeight * ratio) + 200);
}


