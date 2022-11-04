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

    $('.left_slider').slick({
        arrows: false,
        fade: true,
        asNavFor: '.right_slider'
    });

    $('.right_slider').slick({
        arrows: false,
        slidesToShow: 5,
        asNavFor: '.left_slider',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.main_build .wbox .right .arrows i:first-child').on('click', function () {
        $('.left_slider').slick('slickPrev')
    });
    $('.main_build .wbox .right .arrows i:last-child').on('click', function () {
        $('.left_slider').slick('slickNext')
    });

    $('.solution_slider').slick({
        centerMode: true,
        centerPadding: '300px',
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    centerPadding: '300px',
                }
            }
        ]
    })

    $('.solution_slider').on('afterChange', function (e, s, c) {
        $('.solution_con .con').eq(c).addClass('on').siblings().removeClass('on');
    })

    $('.main_solution .arrows div:first-child').on('click', function () {
        $('.solution_slider').slick('slickPrev')
    })
    $('.main_solution .arrows div:last-child').on('click', function () {
        $('.solution_slider').slick('slickNext')
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 300 ? $('.to_top').fadeIn() : $('.to_top').fadeOut()
    });

    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/raw3Nu0_mBQ',
        containment: '.movie',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        playOnlyIfVisible: true,
        showControls: false,
    });

    var swh = true;

    $('.main_promotion .movie_case .btn').on('click', function () {
        $(this).toggleClass('on');
        if (swh) {
            $('#bgndVideo').YTPPause();
        } else {
            $('#bgndVideo').YTPPlay();
        }
        swh = !swh;
    });
    $('.main_promotion .title>div').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
    })

    $('.footer .ft_top .right>li>a').on('click', function () {
        $('.footer .ft_top .right>li').removeClass('on')
        $(this).parent().toggleClass('on');
    });

    //i를 click하면 li들 모두 다 on을 뺀다
    $('.footer .ft_top .right i').on('click', function () {
        $('.footer .ft_top .right>li').removeClass('on')
    });

    //팝업창 고정 스크롤X
    // $('.popup_case').on('wheel', function (e) {
    //     e.preventDefault();
    $('.popup_case').on('wheel', function (event) {
        event.preventDefault();
    });

    $('.popup i').on('click', function () {
        $('.popup_case').hide();
    });

    $('popup input').on('change', function () {
        $('.popup_case').hide();
        //쿠키를 던져줘라
    });

    var cookie = $.cookie('popup');
    var b_cookie = $.cookie('top_banner');

    if (!cookie) {
        $('.popup_case').show()
    }
    if (!b_cookie) {
        $('.popup_case').show()
    }

    $('.top_banner input').on('change', function () {
        $('.top_banner').slideUp(200);
        $('.main').addClass('on');
        $.cookie('top_banner', 'value', (expire))
    });

    //모바일 메뉴
    $('.header nav>ul>li>a').on('click', function (event) {
        event.preventDefault();
        $('.submenu').stop().slideUp();
        $(this).next().stop().slideToggle();
    });

    $(window).on('resize', function () {
        $('.submenu').removeAttr('style');
    });

    $('.mopen').on('click', function () {
        $('nav').toggleClass('on');
    })


});