function openNav() {

  document.getElementById("mySidenav").style.width = "300px";
  $('#overlayy').addClass("active");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $('#overlayy').removeClass("active");
}

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
});




$(document).ready(function () {
  $('select').niceSelect();
});
