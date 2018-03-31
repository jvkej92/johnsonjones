$(document).ready(function(){
    let el =".card, .hover-box, .nav-panel"
    $(el).click(function(e){
        debugger;
        e.preventDefault();
        window.location.replace($(this).find('.child-link').attr('href'));
    });
});