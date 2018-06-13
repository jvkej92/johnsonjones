jQuery(function ($) {

    $('.slider').slick({
        variablewidth: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            }
          ]
    });

    //Base Animations On Load
    //Fades the cehvron in on load
    $('.hero-chevron').hide();
    $('.hero-chevron').delay(1000).fadeIn(500);

    //Array for words looped through on load
    let animationRate = 800;
    let heroArray = [
        'marketing',
        'branding',
        'web design',
        'content',
        'social media'
    ]

    //Triggers cycle function
    cycle(animationRate, heroArray);

    //Calculates the length of the heroArray and calls the function accordingly
    setInterval(function () {
        cycle(animationRate, heroArray);
    }, animationRate * heroArray.length);

    //Finds span tag with ".cycle" class and replaces it with the next item in the array base on the animation rate
    function cycle(rate, array) {
        $.each(array, function (index) {
            setTimeout(function () {
                $('.cycle').replaceWith(`<span class="cycle">${array[index]}</span>`);
            }, rate * index);
        });
    }

    //Sets hero height to that of the window.
    $('.mobile-menu-items').css('height', $(window).height - $('.nav-bar').height());

    //Find and replace for the plus icons
    let plusSignSm = '<svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 24" xml:space="preserve" height="24px" width="24px"><polygon fill="#003359" points="19.2,9.6 14.4,9.6 14.4,4.8 14.4,0 9.6,0 9.6,4.8 9.6,9.6 4.8,9.6 0,9.6 0,14.4 4.8,14.4 9.6,14.4 9.6,19.2 9.6,24 14.4,24 14.4,19.2 14.4,14.4 19.2,14.4 24,14.4 24,9.6 "/></svg>';
    let plusSignMed = '<svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 38 24" xml:space="preserve" height="48px" width="48px"><polygon fill="#003359" points="19.2,9.6 14.4,9.6 14.4,4.8 14.4,0 9.6,0 9.6,4.8 9.6,9.6 4.8,9.6 0,9.6 0,14.4 4.8,14.4 9.6,14.4 9.6,19.2 9.6,24 14.4,24 14.4,19.2 14.4,14.4 19.2,14.4 24,14.4 24,9.6 "/></svg>';
    let plusSignLrg = '<svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="4 0 18 24" xml:space="preserve" height="64px" width="64px"><polygon fill="#003359" points="19.2,9.6 14.4,9.6 14.4,4.8 14.4,0 9.6,0 9.6,4.8 9.6,9.6 4.8,9.6 0,9.6 0,14.4 4.8,14.4 9.6,14.4 9.6,19.2 9.6,24 14.4,24 14.4,19.2 14.4,14.4 19.2,14.4 24,14.4 24,9.6 "/></svg>';

    $('.plus, .plus-sm').replaceWith(plusSignSm);
    $('.plus-md').replaceWith(plusSignMed);
    $('.plus-lg').replaceWith(plusSignLrg);

    //Triggers the mobile menu
    $('.hamburger').click(function () {
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $('.mobile-menu-items').slideUp(100);
        } else {
            $(this).addClass('is-active');
            $('.mobile-menu-items').slideDown(100);
        }
    });

    //Nav Panel animation triggers
    $('.nav-panel').mouseover(function () {
        $('.nav-panel').addClass('nav-panel-hover');
    });

    $('.nav-panel').mouseout(function () {
        $('.nav-panel').removeClass('nav-panel-hover');
    });



    //Hover box animation triggers
    $('.hover-box, .resource-box').mouseover(function () {
        $(this).find('.hover-box-img, .resource-box-img').addClass('grow');
        $(this).find('.hover-box-learn-more, .resource-box-learn-more').css('margin-left', '16px')
    });

    $('.hover-box, .resource-box').mouseout(function () {
        $(this).find('.hover-box-img, .resource-box-img').removeClass('grow');
        $(this).find('.hover-box-learn-more, .resource-box-learn-more').css('margin-left', '0')
    });

    //Accordian
    (function($) {
        //Hide all panels
        var allPanels = $('.accordian-list-content').hide();
        $('.model-inactive:first-of-type').attr('class', 'model-active');
        //Show first panel
        $('.accordian-list:first-of-type > .accordian-list-content').show();
        //Add active class to first panel 
        $('.accordian-list:first-of-type > .accordian-list-heading').addClass('accordion-active');
        //Handle click function
        jQuery('.accordian-list').on('click', function() {
            //this clicked panel
            //the target panel content
            let target = $(this); 
            let modelTarget = `#${$(this).data('model-item')}`;
            //Only toggle non-displayed 
            if(!target.children('.accordian-list-heading').hasClass('accordion-active')){
                
                $('.accordian-list-heading').removeClass('accordion-active');
                target.children('.accordian-list-heading').addClass('accordion-active');
                
                $('.accordian-list-content').slideUp(300);
                $('.accordion-active').siblings('.accordian-list-content').slideDown(300);
            }
            if(!$(modelTarget).hasClass('model-active')){
                $('.model-active').attr('class', 'model-inactive');
                $(modelTarget).attr('class', 'model-active');
            }
          return false;
        });

        jQuery('.model-inactive, #connection').on('click', function() {
            let target = $(this).data('model-item');
            $('.accordian-list').each(function(){
                if($(this).data('model-item') == target){
                    $(this).trigger('click')
                }
            });
        });
      })(jQuery);
});