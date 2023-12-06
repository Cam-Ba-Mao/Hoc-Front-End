(function ($) {

    function initSliderTestimonial () {

        var swiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            cardsEffect: {
                rotate: false,
                slideShadows: false,
                perSlideOffset: 90,
                perSlideRotate: 0,
            },
        });
    }

    function initSliderConditionGraduate() {
        const sliderConditionGraduate = new Swiper('.wass-condition-graduate__slider', {
            slidesPerView: 1,
            spaceBetween: 16,
          
        });

        $('.wass-condition-graduate__tab--item').on('click', function () {
            // Lấy chỉ số của tab được click
            var index = $(this).data('slide-index');
            $('.wass-condition-graduate__tab--item').removeClass('active');
            $('.wass-condition-graduate__tab--item:nth-child('+ (index + 1) +')').addClass('active');

            // Chuyển đến slide tương ứng
            sliderConditionGraduate.slideTo(index);
        });
    }

    
    $(function () {
        initSliderConditionGraduate();
        initSliderTestimonial();

    });

})(jQuery);

