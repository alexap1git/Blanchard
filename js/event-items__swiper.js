var swiper = new Swiper(".event-items", {
   /* slidesPerView: 3,
    slidesPerGroup: 2,
    */
    loop:false,
     grid: {
         rows: 1,
     },
     /*slideClass: "touch-beautiful__swiper-slide",*/
     navigation: {
        nextEl: ".events-background__swiper-button-next",
        prevEl: ".events-background__swiper-button-prev"
    },
    /* pagination: {
         el: ".events-background__swiper-pagination",
         clickable: true,
     },*/
     breakpoints: {
         0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            pagination: {
                el: ".events-background__swiper-pagination",
                type: "bullets",
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
                el: ".events-background__swiper-pagination",
                type: "bullets",
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
                el: ".events-background__swiper-pagination",
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
            pagination: {
                el: ".events-background__swiper-pagination",
                clickable:	true,
                enabled: true,
                dynamicBullets: false
/*                dynamicMainBullets:	1*/
            },
            slidesPerView: 3,
            grid: {
                rows: 1
            },
            spaceBetween: 27
            },
    
        1200: {
            navigation: {
                nextEl: ".events-background__swiper-button-next",
                prevEl: ".events-background__swiper-button-prev"
            },    
            pagination: {
                clickable:	false,
                enabled: true
            },
            slidesPerView: 3,
            grid: {
                rows: 1
            },
            spaceBetween: 51
            }
     },
 });