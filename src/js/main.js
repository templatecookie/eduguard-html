// $('.hamburger-menu a').on('click', function(){
//   $("#mySidenav").css('left', '0');
//   toggleOverlay();
// });

// function hideNav(){
//   $("#mySidenav").css('left', '-300px');
//   toggleOverlay();
// }

// $('#overlayy').on('click', function(){
//   hideNav();
// });

// $('.closebtn').on('click', function() {
//   hideNav();
// });

// function toggleOverlay(){
//   $('#overlayy').toggleClass("active");
// }

//   //testimonial_slider
//   $('.testimonial__active').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     arrows: true,
//     autoplaySpeed: 2000,
//     prevArrow: '.testimonial__wrapper .prev-arrow',
//     nextArrow: '.testimonial__wrapper .next-arrow',
//   });


// // init Isotope
// var $grid = $('.populercoures-item').isotope({
//   // options
// });
// // filter items on button click
// $('.populercoures-ist').on('click', 'li', function () {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({
//     filter: filterValue
//   });
// });



// $(document).ready(function () {
//   $('select').niceSelect();
// });



(function ($) {
  "use strict";

  $('.hamburger-menu a').on('click', function () {
    $("#mySidenav").css('left', '0');
    toggleOverlay();
  });

  function hideNav() {
    $("#mySidenav").css('left', '-300px');
    toggleOverlay();
  }

  $('#overlayy').on('click', function () {
    hideNav();
  });

  $('.closebtn').on('click', function () {
    hideNav();
  });

  function toggleOverlay() {
    $('#overlayy').toggleClass("active");
  }

  //testimonial_slider
  $('.testimonial__active').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: '.testimonial__wrapper .prev-arrow',
    nextArrow: '.testimonial__wrapper .next-arrow',
  });

  //Brand_slider
  $('.brand-area').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $('.ourinstructor-active').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: '.ourinstructor__wrapper .prev-arrow',
    nextArrow: '.ourinstructor__wrapper .next-arrow',
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });

  // init Isotope
  var $grid = $('.populercoures-item').isotope({
    // options
  });
  // filter items on button click
  $('.populercoures-ist').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });

    // filter items on button click
    $('.populercoures-ist').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
  });

  /* magnificPopup video view */
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });


  //nice-select
  $(document).ready(function () {
    $('select').niceSelect();
  });



})(jQuery);
