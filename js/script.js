$(document).ready(function () {
    "use strict";

    /* variabless */
    var appointmentButtonBox = $('.form-wizard fieldset .select-box .choise button');
    var servicesHiddenInput = $('.form-wizard fieldset .services_hidden_input');
    /* var appointmentDate = $('.form-wizard fieldset .xdsoft_date');
    var dateHiddenInput = $('.form-wizard fieldset .date_hidden_input'); */

    //prevent default buttons in select service
    appointmentButtonBox.on("click", function () {
        servicesHiddenInput.val($(this).val());
    })

    /* $('fieldset').on("click", function () {

        console.log('you are clicked');
    }) */

    //toggle between menue and x in navbar
    $("header .navbar-toggler").on("click", function () {
        if ($(this).hasClass("collapsed")) {
            $(this).removeClass('close')
        } else {
            $(this).addClass('close')
        }
    })

    $('.navbar-collapse.collapse').mouseleave(function () {
        $(this).removeClass('show', 1000);
        $('.navbar-toggler').removeClass('close', 1000)
    });

    //on scroll make header fixed
    $(window).scroll(function () {
        var myScroll = $(window).scrollTop();
        if (myScroll >= 5) {
            $("header").addClass("fixed-header");
            $(".top-nav").addClass("fade-top-nav");
            $("section.top-nav .data-user-popup").slideUp(300)
            $("section.top-nav .user-popup-buttons").slideUp(300)
            $('section.top-nav .part.other .icon.lang .dropdown-lang').slideUp(300);
        } else {
            $("header").removeClass("fixed-header");
            $(".top-nav").removeClass("fade-top-nav");
        }
    })

    //slide popup data user 
    $("section.top-nav .icon.account").on('click', function () {
        $("section.top-nav .data-user-popup").slideToggle()
        $('section.top-nav .data-user-popup').mouseleave(function () {
            $(this).fadeOut(500)
        });
        $('section.top-nav .part.other .icon.lang .dropdown-lang').slideUp(300);
    })

    //slide popup llogin and register 
    $("section.top-nav .icon.account").on('click', function () {
        $("section.top-nav .user-popup-buttons").slideToggle()
        $('section.top-nav .user-popup-buttons').mouseleave(function () {
            $(this).fadeOut(500)
        });
    })

    var theCounter = $('.the-numbers');
    if (theCounter.length) {
        theCounter.counterUp({
            delay: 10,
            time: 2000
        });
    }

    function newsSlidePopup() {
        $('section.news-articles .clickable a').on('click', function (event) {
            event.preventDefault();
            $('section.news-articles .popup-articles').slideDown(400);
            $(':root').css("overflow", "hidden");
        });

        $('.popup-articles .exite-button').on('click', function () {
            $('section.news-articles .popup-articles').slideUp(250);
            $(':root').css("overflow", "auto");
        });
    }
    newsSlidePopup();

    function langSlideDown() {
        $('section.top-nav .part.other .icon.lang').on('click', function () {
            $('section.top-nav .part.other .icon.lang .dropdown-lang').slideToggle(300);
            $('section.top-nav .data-user-popup').slideUp(300);
            $('section.top-nav .user-popup-buttons').slideUp(300);
        });
        $('section.top-nav .part.other .icon.lang .dropdown-lang').mouseleave(function () {
            $(this).fadeOut(500)
        });
    }
    langSlideDown()

    function fadeLangAndUserPupup() {
        $('header, .slider, .banner').click(function () {
            $('section.top-nav .part.other .icon.lang .dropdown-lang, section.top-nav .data-user-popup, section.top-nav .user-popup-buttons').fadeOut(500)
        });
    }
    fadeLangAndUserPupup()

    $('.choise').on('click', function () {
        $('.choise button.required').removeClass('required selected').removeClass('input-error');
        $(this).find('button').addClass('required selected').removeClass('input-error');
    });

    //alert warning
    $('.alert.alert-warning button.close').on('click', function () {
        $('.alert.alert-warning').fadeOut();
    });

    /* wow */
    new WOW().init();

    /* loading */
    $('.loading').delay(2500).fadeOut(1000)


    /*  */
    $('.urgent').on('click', function () {
        $(this).addClass('urgent_consultation')
        if ($(this).hasClass('urgent_consultation')) {
            $('fieldset.payment').find('.pay_btn').addClass('step3_btn_back')
        }
    })
    $('.form-wizard').find('.choise button').not('.urgent').on('click', function () {
        $('.urgent').removeClass('urgent_consultation')
        $('fieldset.payment').find('.pay_btn').removeClass('step3_btn_back')
    })
    /*  */
});