'use strict';

// Toggle Menu
const toggleMenu = document.querySelector('.menu-icon-container');
const sidebar = document.querySelector('.navbar-mobile');
toggleMenu.addEventListener('click', function () {
  sidebar.classList.toggle('show');
  document.body.classList.toggle('over');
});

var navMenu = [].slice.call(
  document.querySelectorAll('.navbar-mobile__menu-item')
);

for (var y = 0; y < navMenu.length; y++) {
  navMenu[y].addEventListener('click', function () {
    menuClick(this);
  });
}

function menuClick(current) {
  const active = current.classList.contains('open');
  navMenu.forEach((el) => el.classList.remove('open'));
  if (active) {
    current.classList.remove('open');
  } else {
    current.classList.add('open');
  }
}

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

  $('.menu-icon-container').on('click', function () {
    $('.menu-icon').toggleClass('transformed');
  });

  //Events Slider
  $('.eventsSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: false,
    autoplaySpeed: 2000,
    prevArrow: ' .slider__arrow-left',
    nextArrow: ' .slider__arrow-right',
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
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  // newCourse
  $('.new__courses').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: false,
    autoplaySpeed: 2000,
    // prevArrow: '.new-course-arrows .prev-arrow',
    // nextArrow: '.new-course-arrows .next-arrow',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
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
    arrows: false,
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
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $('.about__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
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
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //testimonial_slider
  $('.testimonial__slider--one').slick({
    autoPlay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.testimonial__slider--two').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.testimonial__slider--three').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 2000,
  });

  $('.browse-categories-area').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  $('.categories__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          // slidesToSc
          centerMode: true,
          centerPadding: '15px',
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
    arrows: false,
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
  $('.browseCategories').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    autoplaySpeed: 2000,
    nextArrow: ' .browse__right--arrow',
    prevArrow: ' .browse__left--arrow',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
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
