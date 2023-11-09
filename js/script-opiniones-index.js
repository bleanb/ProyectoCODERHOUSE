var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 120,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    centerSlides: 'true',
    fade: 'true',
    grabCursor: 'true',
    speed: 600,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{ 
        0:{
            slidesPerView: 1,
            spaceBetween: 25,
            loop: true,
            centerSlides: 'true',
        },
        520:{
            slidesPerView: 1,
            paceBetween: 120,
            centerSlides: 'true',
        },
        950:{
            slidesPerView: 3,
            spaceBetween: 120,
            centerSlides: 'true',
        },
    },

});