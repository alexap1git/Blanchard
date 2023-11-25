    var swiper = new Swiper('.swiper3-container', {
        spaceBetween: 50,
        loop: false,  
       /*  allowSlidePrev:false,
       pagination: {
            el: '.swiper3-pagination',
            type: 'fraction',
        },*/
        navigation: {
            nextEl: '.swiper3-button-next',
            prevEl: '.swiper3-button-prev',
        },
        breakpoints: {
            0: {
               slidesPerView: 1,
               slidesPerGroup: 1,
               pagination: {
                el: '.swiper3-pagination',
                type: 'fraction',
   /*              bulletActiveClass: 'swiper-pagination-bullet-active',
                   dynamicBullets:	true,
                   dynamicMainBullets:	5,*/
                   clickable:	true,
                   enabled: true
               },
               grid: {
                   rows: 1
               },
               spaceBetween: 10
               },
            320: {
               loop:false,
               pagination: {
                    el: '.swiper3-pagination',
                    type: 'fraction',
   /*              bulletActiveClass: 'swiper-pagination-bullet-active',
                   dynamicBullets:	true,
                   dynamicMainBullets:	5,*/
                    clickable:	true,
                    enabled: true
               },
               slidesPerView: 1,
               slidesPerGroup: 1,
               grid: {
                   rows: 1
               },
               spaceBetween: 20
               },
            690: {
               loop:false,
               pagination: {
                    el: '.swiper3-pagination',
                    type: 'fraction',
                    dynamicBullets:false,
                    enabled: true,
                    clickable:	true,
               },
               slidesPerView: 2,
               slidesPerGroup: 2,
               grid: {
                   rows: 1
               },
               spaceBetween: 34
               },
            1024: {
                loop:false,
                navigation: {
                    nextEl: ".swiper3-button-next",
                    prevEl: ".swiper3-button-prev"
                },
                slidesPerView: 2,
                grid: {
                rows: 1
                },
                spaceBetween: 50
               },
       
            1200: {
                loop:false,
                navigation: {
                    nextEl: ".swiper3-button-next",
                    prevEl: ".swiper3-button-prev"
                },
                slidesPerView: 3,
                grid: {
                rows: 1
                },
                spaceBetween: 50
            }
        },
    });
