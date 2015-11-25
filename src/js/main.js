/******************************************************************
JAVASCRIPT: MAIN.JS

******************************************************************/

function adressbox() {
    console.log('yes');

    var $label = $('.fields-label-check');

    if ($label.hasClass('checked')) {
        $label.removeClass('checked');
        $('.adressbox').removeClass('box--hidden');
    } else {
        $label.addClass('checked');
        $('.adressbox').addClass('box--hidden');
    }
}

function kreditbox() {

    if ($('.kredit-toggle').hasClass('checked')) {
        $('.kredit-toggle').removeClass('checked');
        $('.kreditbox').hide();
    } else {
        $('.kredit-toggle').addClass('checked');
        $('.kreditbox').show();
    }
}

function scrollCart() {
    var scroll_offset = $(window).scrollTop(),
        cart_scroll_offset = cart_offset + scroll_offset;

    $cart.css('top', cart_scroll_offset);

    console.log(scroll_offset);
    console.log(cart_offset);
    console.log(cart_scroll_offset);
}


$(document).ready(function($) {

    var $input = $('.fields-item-frame'),
        $cart  = $('.cart'),
        cart_offset = $cart.offset().top;


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
        $(this).siblings('.fields-item-placeholder--info').addClass('is-invisible');

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


    // Show and hide additional boxes when checked/unchecked
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


    $(document).on('click', '.kredit-toggle', function() {
        //kreditbox();
        //console.log('test');
    });


    // Make cart fixed on scroll
    $(window).on('scroll', function() {
        scrollCart();
    });

});