



  
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      slidesPerView: 2,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      loopAdditionalSlides: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

  

    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: "auto",
    //     spaceBetween: 30,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //   });