$(document).ready(function(){

    //Hero slider init
    $('#hero').slick({
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        speed: 400,
        autoplay: true
    });

    //Trending slider init
    $('#trending-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 400,
        autoplay: true
    });

    //Blog slider init
    $('#blog-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        speed: 400,
        autoplay: true,
        nextArrow: '<span class="arrow-next"></span>',
        prevArrow: '<span class="arrow-prev"></span>',
        responsive: [
            {
                breakpoint: 1370,
                settings: {
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });


    //Radio button on trending products checked state styles
    $('.radio-group input').click(function() {
        $(".radio-group label").removeClass("checked");
        if($(this).is(':checked')) {
            $(this).closest('label').addClass("checked");
        }
    });

    //collapse mobile menu
    $(".navbar-toggle").on("click", function () {
        $("#navbar-collapse").toggleClass("collapsed");
    });
});