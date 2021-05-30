'use strict';

(function ($) {
  $('.hamburger-menu a').on('click', function () {
    $('#mySidenav').css('left', '0');
    toggleOverlay();
  });

  function hideNav() {
    $('#mySidenav').css('left', '-300px');
    toggleOverlay();
  }

  $('#overlayy').on('click', function () {
    hideNav();
  });

  $('.closebtn').on('click', function () {
    hideNav();
  });

  function toggleOverlay() {
    $('#overlayy').toggleClass('active');
  }

  //Events Slider
  $('.eventsSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: '.event-slider-arrows .prev-arrow',
    nextArrow: '.event-slider-arrows .next-arrow',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });

  // newCourse
  $('.newCourse').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: '.new-course-arrows .prev-arrow',
    nextArrow: '.new-course-arrows .next-arrow',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  // our students
  $('.student-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '.student-slider-arrows .prev-arrow',
    nextArrow: '.student-slider-arrows .next-arrow',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });

  $('.about__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: true,
    autoplaySpeed: 2000,
    nextArrow: '.about-slider-arrows .next-arrow',
    prevArrow: '.about-slider-arrows .prev-arrow',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

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
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //Mentor _Slider
  $('.ourinstructor-active').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '.ourinstructor__wrapper .prev-arrow',
    nextArrow: '.ourinstructor__wrapper .next-arrow',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });

  //Event _Slider
  $('.ourevent-active').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 2000,
    prevArrow: '.ourevent__wrapper .prev-arrow',
    nextArrow: '.ourevent__wrapper .next-arrow',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });

  //Event _Slider
  $('.browse-categories-area').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 2000,
    nextArrow: '.browse-categories-arrows .next-arrow',
    prevArrow: '.browse-categories-arrows .prev-arrow',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // filter items on button click
  $('.populercourse-ist').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue,
    });

    // filter items on button click
    $('.populercourse-ist').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue,
      });
    });
  });

  /* magnificPopup video view */
  $('.popup-video').magnificPopup({
    type: 'iframe',
  });

  //nice-select
  $(document).ready(function () {
    $('select').niceSelect();
  });

  // init Isotope
  var $grid = $('.populercourse-item').isotope({
    // options
  });
})(jQuery);
