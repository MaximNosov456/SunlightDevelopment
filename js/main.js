$(function () {
  // const swiper = new Swiper(".swiper", {
  //   direction: "vertical",
  //   loop: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //   },
  // });
  //       $('.hamburger, .menu__list-link').on('click',function() {
  //         $('.hamburger').toggleClass('active')
  //         $('.menu').toggleClass('active')
  //       })
  //       $(".menu").on("click", function (e) {
  //           e.preventDefault();
  //           const id  = $(e.target).attr('href');
  //           const top = $(id).offset().top;
  //           $('body,html').animate({scrollTop: top}, 1500);
  //         });
  //         function toggleSide (myClass) {
  //           $(myClass).each(function(i) {
  //             $(this).on("click", function (e) {
  //               e.preventDefault();
  //               $(".products-card__front").eq(i).toggleClass('products-card__front--active')
  //               $(".products-card__back").eq(i).toggleClass('products-card__back--active')
  //           })
  //         })
  //       }
  //       toggleSide(".products-card__link");
  //       toggleSide(".products-card__back-link");
  //       // Tabs
  //       $('.tab').on('click', function() {
  //         $(this)
  //           .addClass('tab--active').siblings().removeClass('tab--active')
  //           .closest('.tabs-wrapper').find('.tab-content')
  //           .removeClass('tab-content--active')
  //           .eq($(this).index())
  //           .addClass('tab-content--active');
  //       });
  //       // Modal
  //       $('[data-modal=consultation]').on('click',function () {
  //         $('.modal-consultation').fadeIn()
  //       })
  //       $('[data-modal=order]').each(function(i) {
  //           $(this).on('click',function() {
  //             $('.modal-order .modal__text').text($('.products-card__title').eq(i).text());
  //             $('.modal-order').fadeIn()
  //           })
  //       })
  //       $('.modal__close').on('click',function () {
  //         $('.modal-consultation, .modal-order, .modal-thank').fadeOut()
  //       })
  //       // Validation
  //       function validateForms (form) {
  //         $(form).validate(
  //           {
  //             rules:{
  //               name:'required',
  //               phone:'required',
  //               email:{
  //                 required:true,
  //                 email:true
  //               }
  //             },
  //             messages: {
  //               name: "Введите свое имя",
  //               phone:'Введите свой номер телефона',
  //               email: {
  //                 required: "Введите свою почту",
  //                 email: "Ваш почтовый адрес должен быть в формате name@domain.com"
  //               }
  //             }
  //           }
  //         );
  //       }
  //       validateForms('.modal-consultation form')
  //       validateForms('.modal-order form')
  //       validateForms('.consultation form')
  //       $("input[name=phone]").mask("+7(999) 999-99-99");
  //       $('form').on('submit',function(e) {
  //         e.preventDefault()
  //         $.ajax({
  //           type:'POST',
  //           url:'mailer/smart.php',
  //           data: $(this).serialize()
  //         }).done(function () {
  //           $(this).find('input').val('');
  //           $('form').trigger('reset')
  //           $('.modal-consultation, .modal-order').fadeOut()
  //           $('.modal-thank').fadeIn()
  //         return false;
  //       })
  //   })
  //     new WOW().init();
  //Accordion

  $(".valuation__accordion-content").hide();
  $(".valuation__accordion-title").on("click", function () {
    if ($(this).hasClass("active")) {
      $(".valuation__accordion-title").removeClass("active").next().slideUp();
    } else {
      $(".valuation__accordion-title").removeClass("active").next().slideUp();
      $(this).addClass("active").next().slideDown();
    }
  });

  //     //Scroll Spy
  //   $(window).on('scroll',function () {
  //     const scrollTop = $(this).scrollTop()
  //     $('[data-scrollspy').each(function (i) {
  //         const offsetTop = $(this).offset().top
  //         if(scrollTop>=offsetTop -100 ) {
  //           $('.menu__list-item').removeClass('menu__list-item--active')
  //           $('.menu__list-item').eq(i).addClass('menu__list-item--active')
  //         }
  //     })
  // })
});
