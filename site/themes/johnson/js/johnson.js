$(document).ready(function(){
    heroResize();
    $(window).resize(function(){
        heroResize();
    });
    function heroResize(){
        let heroSize = $(window).height();
        let resizeAbsolute = $('.absolute-size-of-parent');
        let resizeParent = resizeAbsolute.parent();
        resizeParent.css('height', heroSize);
        resizeAbsolute.css('height', heroSize);
    }

});