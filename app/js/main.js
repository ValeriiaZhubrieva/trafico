$(function () {
    $('.question__item-title').on('click', function () {
        $(this).parent().toggleClass('question__item--active');
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        clickable: true,
        breakpoints: {
            700:{
                slidesPerView: 1.2,
                spaceBetween:20,
            },
            910: {
              slidesPerView: 1.5,
            },
            1150: {
                slidesPerView: 2,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                },
            
          }
      });
      $('.menu__burger').on('click', function () {
        $('.menu__list').slideToggle();
    });
});