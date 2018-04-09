$(document).ready(function(){
    let el =".card, .hover-box, .nav-panel"
   
    $(el).click(function(e){
        debugger;
        e.preventDefault();
        let button = $(this);
        setTimeout(function(){
            window.location.replace(button.find('.child-link').attr('href'));
        }, 700);
    });

    $('.child-link').click(function(e){
        e.preventDefault();
        let button = $(this);
        setTimeout(function(){
            window.location.replace(button.attr('href'));
        }, 700);
    });
});