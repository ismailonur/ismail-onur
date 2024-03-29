(function($) {
    "use strict";

    $(window).on('load', function() {
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
    })


    var angle = 0;
    setInterval(function() {

        $(".se-pre-con img")
            .css('-webkit-transform', 'rotate(' + angle + 'deg)')
            .css('-moz-transform', 'rotate(' + angle + 'deg)')
            .css('-ms-transform', 'rotate(' + angle + 'deg)');
        angle++;
        angle++;
        angle++;
    }, 10);

    $('.background-image-maker').each(function() {
        var imgURL = $(this).next('.holder-image').find('img').attr('src');
        $(this).css('background-image', 'url(' + imgURL + ')');
    });

    $('#header-fix .nav li a[href^="#"]:not([href="#"])').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 800, 'easeInOutQuad');
        if ($(window).width() < 768) {
            $('.navbar-collapse').removeClass('show');
        }

        event.preventDefault();
    });


    $("body").scrollspy({ target: ".scrollspy", offset: 100 });



    $('#jq').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#61dbfb'
    });
    $('#html').LineProgressbar({
        percentage: 50,
        fillBackgroundColor: '#222c37'
    });
    $('#css').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#E0C341'
    });
    $('#Marketing').LineProgressbar({
        percentage: 65,
        fillBackgroundColor: '#f0db4f  '
    });

    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
    $('.gallery a.nav-link').click(function(e) {

        e.preventDefault();
    });
})(jQuery);

function sendContact() {
    var valid;
    valid = validateContact();
    if (valid) {
        jQuery.ajax({
            url: "contact_mail.php",
            data: 'userName=' + $("#userName").val() + '&userEmail=' +
                $("#userEmail").val() + '&subject=' +
                $("#subject").val() + '&content=' +
                $(content).val(),
            type: "POST",
            success: function(data) {
                $("#mail-status").html(data);
                $('#userEmail').val('');
                $('#subject').val('');
                $('#userName').val('');
                $('#content').val('');
            },
            error: function() {}
        });
    }
}

function validateContact() {
    var valid = true;
    $(".demoInputBox").css('background-color', '');
    $(".info").html('');
    if (!$("#userName").val()) {

        $("#userName").css('border', '1px solid red');
        valid = false;
    }
    if (!$("#userEmail").val()) {

        $("#userEmail").css('border', '1px solid red');
        valid = false;
    }
    if (!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {

        $("#userEmail").css('border', '1px solid red');
        valid = false;
    }
    if (!$("#subject").val()) {

        $("#subject").css('border', '1px solid red');
        valid = false;
    }
    if (!$("#content").val()) {

        $("#content").css('border', '1px solid red');
        valid = false;
    }
    return valid;
}