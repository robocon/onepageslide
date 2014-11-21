$(function(){
    var main_page = $('.main_page');
    var right_page = $('.right_page');
    var bottom_page = $('.bottom_page');

    animationEnd = 'animationend webkitAnimationEnd oanimationend MSAnimationEnd';
    transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

    // Main page to right page
    $('.login').on('click', function(e){
        e.preventDefault();
        main_page.addClass('to-left');
        right_page.removeClass('to-right').addClass('active from-right');

        main_page.one(transitionEnd, function(){
            if (main_page.hasClass('to-left')) {
                main_page.removeClass('active');
                right_page.removeClass('from-right');
            }
        });
    });

    // Right page to main page
    $('.remove-right').on('click', function(){
        right_page.addClass('to-right');
        main_page.removeClass('to-left').addClass('active from-left');

        right_page.one(transitionEnd, function(){
            if (right_page.hasClass('to-right')) {
                right_page.removeClass('active');
                main_page.removeClass('from-left');
            }
        });
    });

    // Main page to bottom page
    $('.page-register').on('click', function(e){
        e.preventDefault();
        main_page.addClass('to-top');
        bottom_page.removeClass('to-bottom').addClass('active from-bottom');

        main_page.one(transitionEnd, function(){
            if (main_page.hasClass('to-top')) {
                main_page.removeClass('active');
                bottom_page.removeClass('from-bottom');
            }
        });
    });

    // Bottom page to main page
    $('.remove-bottom').on('click', function(){
        bottom_page.addClass('to-bottom');
        main_page.removeClass('to-top').addClass('active from-top');

        bottom_page.one(transitionEnd, function(){
            if (bottom_page.hasClass('to-bottom')) {
                bottom_page.removeClass('active');
                main_page.removeClass('from-top');
            }
        });
    });

    /* Validation login form */
    $("#login_form").validate({
        rules:{
            email: "required",
            password: "required",
            password: {
                minlength: 4,
            }
        },
        messages: {
            minlength: 'Your password must be at least 4 characters'
        },
        submitHandler: function(form) {
            console.log(form);
        }
    });

    /* Validation register form */
    $('#register_form').validate({
        rules: {
            firstname: "required",
            lastname: "required",
            regis_email: "required",
            email_repeat: {
                equalTo: "#regis_email"
            },
        },
        submitHandler: function(form) {
            console.log(form);
        }
    });
});
