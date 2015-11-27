/******************************************************************
JAVASCRIPT: MAIN.JS

******************************************************************/

function adressbox() {

    var $label = $('.fields-label-check');

    if ($label.hasClass('checked')) {
        $label.removeClass('checked');
        $('.adressbox').removeClass('box--hidden');
        $('.adressbox').addClass('box--transition');
    } else {
        $label.addClass('checked');
        $('.adressbox').addClass('box--hidden');
        $('.adressbox').removeClass('box--transition');
    }
}

function showKreditbox() {

    $('.kreditbox').removeClass('box--hidden');
    $('.kreditbox').addClass('box--transition');

}

function hideKreditbox() {

    $('.kreditbox').addClass('box--hidden');
    $('.kreditbox').removeClass('box--transition');

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


$(document).ready(function($) {

    var $input = $('.fields-item-frame'),
        $cart  = $('.cart'),
        cart_offset = $cart.offset().top;


    // Hide loading spinner
    $('.spinner').hide();


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

        setTimeout(delay_one, 1500);
        function delay_one() {

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

        setTimeout(delay_two, 2000);
        function delay_two() {

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

        console.log(value);

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


    // Make cart fixed on scroll
    $(window).on('scroll', function() {
        scrollCart();
    });

});