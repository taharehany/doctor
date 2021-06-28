function scroll_to_class(element_class, removed_height) {
    var scroll_to = $(element_class).offset().top - removed_height;
    if ($(window).scrollTop() != scroll_to) {
        $('.form-wizard').stop().animate({
            scrollTop: scroll_to
        }, 0);
    }
}

jQuery(document).ready(function () {
    "use strict";
    /*
        Form
    */
    $('.form-wizard fieldset:first').fadeIn('slow');

    $('.form-wizard .required').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $('.form-wizard .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        // navigation steps / progress steps
        var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');

        // fields validation
        parent_fieldset.find('.selected').each(function () {
            if ($(this).hasClass('required')) {
                $(this).removeClass('input-error');
                next_step = true;
            } else if (!$(this).hasClass('required')) {
                next_step = false;
            } else {
                $(this).addClass('input-error');
                next_step = false;
            }
        });
        // fields validation
        if ($('.form-wizard-step3').hasClass('active')) {
            $('.payment-inputs').find('.form-control').each(function () {
                if ($(this).val() == "") {
                    next_step = false;
                    $(this).addClass('input-error');
                } else {
                    next_step = true;
                    $(this).removeClass('input-error');
                }
            })
        } else {
            next_step = true
        }
        if ($('.form-wizard-step2').hasClass('active')) {
            $('.payment-inputs').find('.form-control').each(function () {
                if ($(this).val() == "") {
                    next_step = false;
                    $(this).addClass('input-error');
                } else {
                    next_step = true;
                    $(this).removeClass('input-error');
                }
            })
        } else {
            next_step = true
        }

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                // change icons
                current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                // progress bar
                // show next step
                $(this).next().fadeIn();
                // scroll window to beginning of the form
                scroll_to_class($('.form-wizard'), 20);
            });

            // fields validation
            parent_fieldset.find('.selected').each(function () {
                if ($(this).hasClass('urgent_consultation')) {
                    parent_fieldset.fadeOut(0, function () {
                        // change icons
                        current_active_step.removeClass('active').addClass('activated').next().next().addClass('active');
                        $(this).next().fadeOut(0);
                        $(this).next().next().fadeIn(200);
                        // scroll window to beginning of the form
                        scroll_to_class($('.form-wizard'), 20);
                    });
                }
            });
            // fields validation
        }

    });

    $('.you_cant').fadeOut(0)

    // previous step
    $('.form-wizard .btn-previous').on('click', function () {
        // navigation steps / progress steps
        var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');

        $(this).parents('fieldset').fadeOut(400, function () {
            // change icons
            current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
            // progress bar
            // show previous step
            $(this).prev().fadeIn();
            // scroll window to beginning of the form
            scroll_to_class($('.form-wizard'), 20);
        });

        if ($(this).hasClass('step3_btn_back') && $('.urgent_consultation').hasClass('selected')) {
            $('.form-wizard').find('.date_and_time .xdsoft_datetimepicker').addClass("pointer_prevent");
            /* $('.form-wizard').find('.date_and_time').addClass("fade_this");
            $('.form-wizard').find('.step_1').fadeIn();
            $(this).parents('.form-wizard').find('.form-wizard-step.form-wizard-step').removeClass('active') */
            $('.form-wizard').find('.date_and_time .xdsoft_datetimepicker').fadeOut();
            $('.you_cant').fadeIn(0)
        } else {
            $('.form-wizard').find('.date_and_time .xdsoft_datetimepicker').removeClass("pointer_prevent");
            $('.you_cant').fadeOut(0)
            $('.form-wizard').find('.date_and_time .xdsoft_datetimepicker').fadeIn();
        }
        $('.form-wizard').find('.choise button').not('.urgent').on('click', function () {
            $('.form-wizard').find('.date_and_time').removeClass("fade_this");
        })
    });

    // submit
    $('.form-wizard').on('submit', function (e) {

        // fields validation
        $(this).find('.required').each(function () {
            if ($(this).hasClass('selected')) {
                e.preventDefault();
                $(this).removeClass('input-error');
            } else {
                $(this).addClass('input-error');
            }
        });
        // fields validation

    });
});