$(function(){
    var main_page = $('.main_page');
    var right_page = $('.right_page');

    animationEnd = 'animationend webkitAnimationEnd oanimationend MSAnimationEnd';

    $('.login').on('click', function(){
      main_page.addClass('to-left');
      right_page.addClass('active from-right');

        main_page.one(animationEnd, function(){
          main_page.removeClass('active to-left');
          right_page.removeClass('from-right');
        });
    });

    $('.remove-right').on('click', function(){
      right_page.addClass('to-right');
      main_page.addClass('active from-left');

        right_page.one(animationEnd, function(){
          right_page.removeClass('active to-right');
          main_page.removeClass('from-left');
          main_page.addClass('active');
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
        }
    });

    $('#form_id').validate({
        rules: {
            some_name: "required",
        }
    });
});

$.validator.setDefaults({
	submitHandler: function(form) {
        console.log(form);
		// alert("submitted!");
	}
});
