
var swiper = new Swiper(".swiper-banner", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    lazy: true,
    loopFillGroupWithBlank: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  var swiper = new Swiper('.customer-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    lazy: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      425: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });  