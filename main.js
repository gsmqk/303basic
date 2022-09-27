$('.main_slide').slick({
    arrows: false,
    dots: true,
    autoplay: true,
})

$('.top_banner i').on('click', function () {
    $('.top_banner').slideUp();
})