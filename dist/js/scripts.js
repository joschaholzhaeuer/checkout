/******************************************************************
JAVASCRIPT: MAIN.JS

******************************************************************/

function adressbox() {

    var $label      = $('.fields-label-check'),
        $val_fields = $('.no-validation-fields');

    // if checkbox is unchecked, show additional box
    if ($label.hasClass('checked')) {
        $label.removeClass('checked');
        $('.adressbox').slideDown('fast');
        $('.adressbox').removeClass('no-validation');
        $val_fields.removeClass('no-validation-required');

    // if checkbox is checked, hide additional box
    } else {
        $label.addClass('checked');
        $('.adressbox').slideUp('fast');
        $('.adressbox').addClass('no-validation');

        // remove all input and error messages
        if ($val_fields.hasClass('fields-error-frame')) {
            $val_fields.removeClass('fields-error-frame');
            $val_fields.siblings('.fields-item-label').removeClass('label--correct');
            $val_fields.siblings('.fields-item-label').show();
            $val_fields.siblings('.fields-error').hide();
            $val_fields.siblings('.fields-error2').hide();
            $val_fields.addClass('no-validation-required');
            $val_fields.val('');
        }
    }
}

function showKreditbox() {

    $('.kreditbox').slideDown('fast');
    $('.kreditbox').removeClass('no-validation');
    $('.no-validation-fields2').removeClass('no-validation-required');

}

function hideKreditbox() {

    $('.kreditbox').slideUp('fast');
    $('.kreditbox').addClass('no-validation');

    var $val_fields = $('.no-validation-fields2');

    // remove all input and error messages
    if ($val_fields.hasClass('fields-error-frame')) {
        $val_fields.removeClass('fields-error-frame');
        $val_fields.siblings('.fields-item-label').removeClass('label--correct');
        $val_fields.siblings('.fields-item-label').show();
        $val_fields.siblings('.fields-error').hide();
        $val_fields.siblings('.fields-error2').hide();
        $val_fields.addClass('no-validation-required');
        $val_fields.val('');
    }
}

function checkStep() {

    if ($('.step-one').hasClass('steps-item--active')) {
        $('.step-two--done').addClass('is-hidden');
        $('.steps-number-two').removeClass('is-invisible');

        if ($('.steps-number-one').hasClass('is-invisible')) {
            $('.steps-number-one').removeClass('is-invisible');
            $('.step-one--done').addClass('is-hidden');
        }

    } else if ($('.step-two').hasClass('steps-item--active')) {
        $('.step-one--done').removeClass('is-hidden');
        $('.steps-number-one').addClass('is-invisible');

        if ($('.steps-number-two').hasClass('is-invisible')) {
            $('.steps-number-two').removeClass('is-invisible');
            $('.step-two--done').addClass('is-hidden');
        }

    } else if ($('.step-three').hasClass('steps-item--active')) {
        $('.step-one--done').removeClass('is-hidden');
        $('.step-two--done').removeClass('is-hidden');
        $('.steps-number-one').addClass('is-invisible');
        $('.steps-number-two').addClass('is-invisible');
    }
}

function checkErrorsInput($element) {

    var $current_field = $element;

    // input field was left empty
    if ($current_field.val().length === 0) {
        $current_field.addClass('fields-error-frame');
        $current_field.siblings('.fields-item-label').hide();
        $current_field.siblings('.fields-error').show();

    // input was entered
    } else {
        if ($current_field.hasClass('fields-error-frame')) {
            $current_field.removeClass('fields-error-frame');
            $current_field.siblings('.fields-item-label').show();
            $current_field.siblings('.fields-error').hide();
        }
    }
}

function checkErrorsNumber($element) {

    var $current_field_n = $element,
        entered_input   = $current_field_n.val();

    // input field was left empty
    if (entered_input.length === 0) {
        $current_field_n.addClass('fields-error-frame');
        $current_field_n.siblings('.fields-item-label').hide();
        $current_field_n.siblings('.fields-error2').hide();
        $current_field_n.siblings('.fields-error').show();

    // input was entered
    } else {

        // if no number was entered
        if (!$.isNumeric(entered_input)) {

            // show error message for wrong input and hide previous error, if it is still visible
            if ($current_field_n.hasClass('fields-error-frame')) {
                $current_field_n.siblings('.fields-error').hide();
                $current_field_n.siblings('.fields-error2').show();

            // otherwise show error message for wrong input
            } else {
                $current_field_n.addClass('fields-error-frame');
                $current_field_n.siblings('.fields-item-label').hide();
                $current_field_n.siblings('.fields-error2').show();
            }

        // user entered a correct input
        } else {

            // if user did not enter 5 numbers, show error
            if (($current_field_n.data('validation') == 'min5') && (entered_input.length != 5)) {

                // show error message for wrong input and hide previous error, if it is still visible
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').show();

                // otherwise show error message for wrong input
                } else {
                    $current_field_n.addClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').hide();
                    $current_field_n.siblings('.fields-error2').show();
                }

            // if user did not enter 16 numbers, show error
            } else if (($current_field_n.data('validation') == 'min16') && (entered_input.length != 16)) {

                // show error message for wrong input and hide previous error, if it is still visible
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').show();

                // otherwise show error message for wrong input
                } else {
                    $current_field_n.addClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').hide();
                    $current_field_n.siblings('.fields-error2').show();
                }

            // if user did not enter 3 numbers, show error
            } else if (($current_field_n.data('validation') == 'min3') && (entered_input.length != 3)) {

                // show error message for wrong input and hide previous error, if it is still visible
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').show();

                // otherwise show error message for wrong input
                } else {
                    $current_field_n.addClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').hide();
                    $current_field_n.siblings('.fields-error2').show();
                }

            // user entered correct number
            } else {

                // hide error message
                if ($current_field_n.hasClass('fields-error-frame')) {
                    $current_field_n.removeClass('fields-error-frame');
                    $current_field_n.siblings('.fields-item-label').show();
                    $current_field_n.siblings('.fields-error').hide();
                    $current_field_n.siblings('.fields-error2').hide();
                }
            }
        }
    }
}


function checkErrorsMail($element) {

    var $current_field_n = $element,
        entered_input    = $current_field_n.val(),
        test_mail        = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    // input field was left empty
    if (entered_input.length === 0) {
        $current_field_n.addClass('fields-error-frame');
        $current_field_n.siblings('.fields-item-label').hide();
        $current_field_n.siblings('.fields-error2').hide();
        $current_field_n.siblings('.fields-error').show();

    // input was entered
    } else {

        // if no correct email address was entered
        if (!test_mail.test(entered_input)) {

            // show error message for wrong input and hide previous error, if it is still visible
            if ($current_field_n.hasClass('fields-error-frame')) {
                $current_field_n.siblings('.fields-error').hide();
                $current_field_n.siblings('.fields-error2').show();

            // otherwise show error message for wrong input
            } else {
                $current_field_n.addClass('fields-error-frame');
                $current_field_n.siblings('.fields-item-label').hide();
                $current_field_n.siblings('.fields-error2').show();
            }

        // user entered a correct email address
        } else {

            // hide error message
            if ($current_field_n.hasClass('fields-error-frame')) {
                $current_field_n.removeClass('fields-error-frame');
                $current_field_n.siblings('.fields-item-label').show();
                $current_field_n.siblings('.fields-error').hide();
                $current_field_n.siblings('.fields-error2').hide();
            }
        }
    }
}


$(document).ready(function($) {

    var $input = $('.fields-item-frame'),
        $cart  = $('.cart'),
        cart_offset = $cart.offset().top;


    // Hide loading spinner
    $('.spinner').hide();

    // Hide additional boxes
    $('.adressbox').hide();
    $('.kreditbox').hide();

    // Hide error messages
    $('.fields-error').hide();
    $('.fields-error2').hide();


    function scrollCart() {
        var scroll_offset = $(window).scrollTop(),
            cart_scroll_offset = cart_offset + scroll_offset;

        $cart.css('top', cart_scroll_offset);
    }


    // Animate and switch tabs an nav clicks
    $(document).on('click', '.steps-item', function() {

        //smooth scroll to top
        $('body,html').animate({
            scrollTop: 0 ,
            }, 300
        );

        var $clicked_tab = $(this),
        $tab_one     = $('.tab-one'),
        $tab_two     = $('.tab-two'),
        $tab_three   = $('.tab-three'),
        $step_one    = $('.step-one'),
        $step_two    = $('.step-two'),
        $step_three  = $('.step-three'),
        $tab_active  = $('.tab--active > .box'),
        $spinner     = $('.spinner'),
        $one_number  = $('.step-one > .step-number'),
        $two_number  = $('.step-two > .step-number'),
        $one_done    = $('.step-one--done'),
        $two_done    = $('.step-two--done');

        // Show loading spinner on click
        $tab_active.addClass('box-overlay');
        $spinner.show();

        //check for errors
        $('.fields-input').each(function(index, el) {
            if (!$(this).hasClass('fields-optional') && !$(this).hasClass('no-validation-required')) {
                checkErrorsInput($(this));
            }
        });
        $('.fields-number').each(function(index, el) {
            if (!$(this).hasClass('no-validation-required')) {
                checkErrorsNumber($(this));
            }
        });
        $('.fields-mail').each(function(index, el) {
            if (!$(this).hasClass('no-validation-required')) {
                checkErrorsMail($(this));
            }
        });

        setTimeout(delay_one, 600);
        function delay_one() {

            // check if there are any errors or empty fields in the current tab
            if ($('.tab--active').find('.fields-error-frame').length > 0) {

            // go to next step if there are no errors
            } else {

                // click on tab 1
                if ($clicked_tab.hasClass('step-one') && !$clicked_tab.hasClass('steps-item--active')) {
                    $tab_one.removeClass('tab--inactive');
                    $tab_one.addClass('tab--active');
                    $tab_two.removeClass('tab--active');
                    $tab_two.addClass('tab--inactive');
                    $tab_three.removeClass('tab--active');
                    $tab_three.addClass('tab--inactive');

                    $step_one.addClass('steps-item--active');
                    if ($step_two.hasClass('steps-item--active')) {
                        $step_two.removeClass('steps-item--active');
                    } else if ($step_three.hasClass('steps-item--active')) {
                        $step_three.removeClass('steps-item--active');
                    }

                    if ($step_one.hasClass('steps-item--done')) {
                        $step_one.removeClass('steps-item--done');
                    }
                    if ($step_two.hasClass('steps-item--done')) {
                        $step_two.removeClass('steps-item--done');
                    }

                // click on tab 2
                } else if ($clicked_tab.hasClass('step-two') && !$clicked_tab.hasClass('steps-item--active')) {
                    $tab_two.removeClass('tab--inactive');
                    $tab_two.addClass('tab--active');
                    $tab_one.removeClass('tab--active');
                    $tab_one.addClass('tab--inactive');
                    $tab_three.removeClass('tab--active');
                    $tab_three.addClass('tab--inactive');

                    $step_two.addClass('steps-item--active');
                    $step_one.addClass('steps-item--done');
                    if ($step_one.hasClass('steps-item--active')) {
                        $step_one.removeClass('steps-item--active');
                    } else if ($step_three.hasClass('steps-item--active')) {
                        $step_three.removeClass('steps-item--active');
                    }

                    if ($step_two.hasClass('steps-item--done')) {
                        $step_two.removeClass('steps-item--done');
                    }

                // click on tab 3
                } else if ($clicked_tab.hasClass('step-three') && !$clicked_tab.hasClass('steps-item--active')) {
                    $tab_three.removeClass('tab--inactive');
                    $tab_three.addClass('tab--active');
                    $tab_one.removeClass('tab--active');
                    $tab_one.addClass('tab--inactive');
                    $tab_two.removeClass('tab--active');
                    $tab_two.addClass('tab--inactive');

                    $step_three.addClass('steps-item--active');
                    $step_one.addClass('steps-item--done');
                    $step_two.addClass('steps-item--done');
                    if ($step_one.hasClass('steps-item--active')) {
                        $step_one.removeClass('steps-item--active');
                    } else if ($step_two.hasClass('steps-item--active')) {
                        $step_two.removeClass('steps-item--active');
                    }
                }
            }

            setTimeout(delay_spinner, 300);
            function delay_spinner() {
                // Hide loading spinner after tab-switch
                $tab_active.removeClass('box-overlay');
                $spinner.hide();
                checkStep();
            }
        }
    });


    // Animate and switch tabs on button clicks
    $(document).on('click', '.button-next', function() {

        //smooth scroll to top
        $('body,html').animate({
            scrollTop: 0 ,
            }, 300
        );

        var $clicked_button = $(this),
        $tab_one     = $('.tab-one'),
        $tab_two     = $('.tab-two'),
        $tab_three   = $('.tab-three'),
        $tab_four    = $('.tab-four'),
        $step_one    = $('.step-one'),
        $step_two    = $('.step-two'),
        $step_three  = $('.step-three'),
        $tab_active  = $('.tab--active > .box'),
        $spinner     = $('.spinner');

        // Show loading spinner on click
        $tab_active.addClass('box-overlay');
        $spinner.show();

        //check for errors
        $('.fields-input').each(function(index, el) {
            if (!$(this).hasClass('fields-optional') && !$(this).hasClass('no-validation-required')) {
                checkErrorsInput($(this));
            }
        });
        $('.fields-number').each(function(index, el) {
            if (!$(this).hasClass('no-validation-required')) {
                checkErrorsNumber($(this));
            }
        });
        $('.fields-mail').each(function(index, el) {
            if (!$(this).hasClass('no-validation-required')) {
                checkErrorsMail($(this));
            }
        });

        setTimeout(delay_two, 600);
        function delay_two() {

            // check if there are any errors or empty fields in the current tab
            if ($('.tab--active').find('.fields-error-frame').length > 0) {

            // go to next step if there are no errors
            } else {

                // click on button 1
                if ($clicked_button.hasClass('button-one')) {
                    $tab_one.removeClass('tab--inactive');
                    $tab_one.addClass('tab--active');
                    $tab_two.removeClass('tab--active');
                    $tab_two.addClass('tab--inactive');
                    $tab_three.removeClass('tab--active');
                    $tab_three.addClass('tab--inactive');

                    $step_one.addClass('steps-item--active');
                    if ($step_two.hasClass('steps-item--active')) {
                        $step_two.removeClass('steps-item--active');
                    } else if ($step_three.hasClass('steps-item--active')) {
                        $step_three.removeClass('steps-item--active');
                    }

                    if ($step_one.hasClass('steps-item--done')) {
                        $step_one.removeClass('steps-item--done');
                    }

                // click on button 2
                } else if ($clicked_button.hasClass('button-two')) {
                    $tab_two.removeClass('tab--inactive');
                    $tab_two.addClass('tab--active');
                    $tab_one.removeClass('tab--active');
                    $tab_one.addClass('tab--inactive');
                    $tab_three.removeClass('tab--active');
                    $tab_three.addClass('tab--inactive');

                    $step_two.addClass('steps-item--active');
                    $step_one.addClass('steps-item--done');
                    if ($step_one.hasClass('steps-item--active')) {
                        $step_one.removeClass('steps-item--active');
                    } else if ($step_three.hasClass('steps-item--active')) {
                        $step_three.removeClass('steps-item--active');
                    }

                    if ($step_two.hasClass('steps-item--done')) {
                        $step_two.removeClass('steps-item--done');
                    }

                // click on button 3
                } else if ($clicked_button.hasClass('button-three')) {
                    $tab_three.removeClass('tab--inactive');
                    $tab_three.addClass('tab--active');
                    $tab_one.removeClass('tab--active');
                    $tab_one.addClass('tab--inactive');
                    $tab_two.removeClass('tab--active');
                    $tab_two.addClass('tab--inactive');

                    $step_three.addClass('steps-item--active');
                    $step_one.addClass('steps-item--done');
                    $step_two.addClass('steps-item--done');
                    if ($step_one.hasClass('steps-item--active')) {
                        $step_one.removeClass('steps-item--active');
                    } else if ($step_two.hasClass('steps-item--active')) {
                        $step_two.removeClass('steps-item--active');
                    }

                // click on button 4
                } else if ($clicked_button.hasClass('button-four')) {
                    $tab_four.removeClass('tab--inactive');
                    $tab_four.addClass('tab--active');
                    $tab_three.removeClass('tab--active');
                    $tab_three.addClass('tab--inactive');

                    $('.steps').hide();
                }
            }

            setTimeout(delay_spinner2, 300);
            function delay_spinner2() {
                // Hide loading spinner after tab-switch
                $tab_active.removeClass('box-overlay');
                $spinner.hide();
                checkStep();
            }
        }
    });


    // Animate and switch tabs on button clicks
    $(document).on('click', '.button-prev', function() {

        //smooth scroll to top
        $('body,html').animate({
            scrollTop: 0 ,
            }, 300
        );

        var $clicked_button = $(this),
        $tab_one     = $('.tab-one'),
        $tab_two     = $('.tab-two'),
        $tab_three   = $('.tab-three'),
        $tab_four    = $('.tab-four'),
        $step_one    = $('.step-one'),
        $step_two    = $('.step-two'),
        $step_three  = $('.step-three');

        // click on button 1
        if ($clicked_button.hasClass('button-one')) {
            $tab_one.removeClass('tab--inactive');
            $tab_one.addClass('tab--active');
            $tab_two.removeClass('tab--active');
            $tab_two.addClass('tab--inactive');
            $tab_three.removeClass('tab--active');
            $tab_three.addClass('tab--inactive');

            $step_one.addClass('steps-item--active');
            if ($step_two.hasClass('steps-item--active')) {
                $step_two.removeClass('steps-item--active');
            } else if ($step_three.hasClass('steps-item--active')) {
                $step_three.removeClass('steps-item--active');
            }

            if ($step_one.hasClass('steps-item--done')) {
                $step_one.removeClass('steps-item--done');
            }

        // click on button 2
        } else if ($clicked_button.hasClass('button-two')) {
            $tab_two.removeClass('tab--inactive');
            $tab_two.addClass('tab--active');
            $tab_one.removeClass('tab--active');
            $tab_one.addClass('tab--inactive');
            $tab_three.removeClass('tab--active');
            $tab_three.addClass('tab--inactive');

            $step_two.addClass('steps-item--active');
            $step_one.addClass('steps-item--done');
            if ($step_one.hasClass('steps-item--active')) {
                $step_one.removeClass('steps-item--active');
            } else if ($step_three.hasClass('steps-item--active')) {
                $step_three.removeClass('steps-item--active');
            }

            if ($step_two.hasClass('steps-item--done')) {
                $step_two.removeClass('steps-item--done');
            }

        // click on button 3
        } else if ($clicked_button.hasClass('button-three')) {
            $tab_three.removeClass('tab--inactive');
            $tab_three.addClass('tab--active');
            $tab_one.removeClass('tab--active');
            $tab_one.addClass('tab--inactive');
            $tab_two.removeClass('tab--active');
            $tab_two.addClass('tab--inactive');

            $step_three.addClass('steps-item--active');
            $step_one.addClass('steps-item--done');
            $step_two.addClass('steps-item--done');
            if ($step_one.hasClass('steps-item--active')) {
                $step_one.removeClass('steps-item--active');
            } else if ($step_two.hasClass('steps-item--active')) {
                $step_two.removeClass('steps-item--active');
            }

        // click on button 4
        } else if ($clicked_button.hasClass('button-four')) {
            $tab_four.removeClass('tab--inactive');
            $tab_four.addClass('tab--active');
            $tab_three.removeClass('tab--active');
            $tab_three.addClass('tab--inactive');

            $('.steps').hide();
        }
        checkStep();
    });


    // Show and hide placeholder and labels in input fields
    $input.on('focus', function() {
        // Show placeholder
        $(this).siblings('.fields-item-placeholder--info').removeClass('is-invisible');

        // Show green, small label
        if ($(this).siblings('label').hasClass('label--correct')) {
            $(this).siblings('label').removeClass('label--correct');
        }
        $(this).siblings('label').addClass('label--focused');
    });

    $input.on('focusout', function() {
        // Hide placeholder
        if (!$(this).siblings('.fields-item-placeholder--info').hasClass('fields-item--prefilled')) {
            $(this).siblings('.fields-item-placeholder--info').addClass('is-invisible');
        }

        // Hide small label, if no input exists
        var value = $.trim($(this).val());
        if (value.length === 0) {

            $(this).siblings('label').removeClass('label--focused');
        } else {

            $(this).siblings('label').removeClass('label--focused');
            $(this).siblings('label').addClass('label--correct');
        }
    });

    // Hide placeholder when user starts typing
    $input.on('input focus', function() {

        var value = $.trim($(this).val());

        if (value.length > 0) {

            $(this).siblings('.fields-item-placeholder--info').addClass('is-invisible');
        } else {

            if ($('.fields-item-placeholder--info').hasClass('is-invisible')) {
                $(this).siblings('.fields-item-placeholder--info').removeClass('is-invisible');
            }
        }
    });


    // Show and hide rechnungsadresse box when checked/unchecked
    $(document).on('click', '.rechnung-toggle', function() {

        if (!$(this).data('isClicked')) {
            var $trigger = $(this);

            adressbox();

            // Using a timer to prevent multiple clicks
            $trigger.data('isClicked', true);
            setTimeout(function() {
                $trigger.removeData('isClicked');
            }, 100);
        }
    });

    // Show kreditkarten box when checked
    $(document).on('click', '.kredit-toggle', function() {

        if (!$(this).data('isClicked')) {
            var $trigger2 = $(this);

            if (!$('#kreditkarte').is(':checked')) {
                showKreditbox();
            }

            // Using a timer to prevent multiple clicks
            $trigger2.data('isClicked', true);
            setTimeout(function() {
                $trigger2.removeData('isClicked');
            }, 100);
        }
    });

    // Hide kreditkarten box when unchecked
    $(document).on('click', '.kredit-toggle--off', function() {

        if (!$(this).data('isClicked')) {
            var $trigger2 = $(this);

            hideKreditbox();

            // Using a timer to prevent multiple clicks
            $trigger2.data('isClicked', true);
            setTimeout(function() {
                $trigger2.removeData('isClicked');
            }, 100);
        }
    });


    // Form validation on input fields
    $(document).on('focusout', '.fields-input', function() {

        if (!$(this).hasClass('fields-optional') && !$(this).hasClass('no-validation')) {
            checkErrorsInput($(this));
        }
    });


    // Form validation on number fields
    $(document).on('focusout', '.fields-number', function() {

        if (!$(this).hasClass('no-validation')) {
            checkErrorsNumber($(this));
        }
    });


    // Form validation on mail fields
    $(document).on('focusout', '.fields-mail', function() {

        if (!$(this).hasClass('no-validation')) {
            checkErrorsMail($(this));
        }
    });


    // Make cart fixed on scroll
    $(window).on('scroll', function() {
        scrollCart();
    });

});
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());