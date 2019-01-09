$('.page-scroll').on('click', function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var elemenhref = $(href);
    // console.log(elemenhref.offset().top);
    $('html').animate({
        scrollTop: elemenhref.offset().top - 30
    }, 1000, 'easeInOutExpo');
});

//paralax
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll + '%)'
    });

    //navbar
    if (wScroll > $('.about').offset().top - 50) {
        $('.navbar').css({
            'backgroundColor': 'rgb(105, 39, 39)',
            'transition': '0.8s'
        });
    };
    if (wScroll < $('.about').offset().top - 50) {
        $('.navbar').css({
            'background-color': 'transparent',
            'border': '0',
            'transition': '0.7s'
        });
    }
});