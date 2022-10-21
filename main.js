$(function () {
    $('.top_banner_slide').slick({
        arrows: false,
        dots: true,
    });

    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp(200);
        $('.main').addClass('on')
    });


    $(window).on('scroll', function () {
        var sct = $(window).scrollTop()
        if (sct > 0) {
            $('.header .bottom').addClass('on')
        } else {
            $('.header .bottom').removeClass('on')
        }

    });

    $('.header .grobal').on('click', function () {
        $('.header .link').toggleClass('on')
    })

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        pasueOnHover: false,
    });

    $('.main_slide').on('afterChange', function (e, s, c) {
        $('.main_visual .page li').eq(c).addClass('on').siblings().removeClass('on');
        //c = 0,1,2
        $('.num strong').text("0" + (c + 1))
    })

    $('.page li').on('click', function () {
        var idx = $(this).index() //0,1,2
        $('.main_slide').slick('slickGoTo', idx)
    })

    $('.main_visual .arrows i:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows i:last-child').on('click', function () {
        $('.main_slide').slick('slickNext')
    });





})