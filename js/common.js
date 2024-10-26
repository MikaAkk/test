jQuery(document).ready(function ($) {

  $('.burger, .menu').click(function (e) {
    e.preventDefault();
    $('.open-mnu').addClass('open');
  });

  $('.open-mnu-close').click(function () {
    $('.open-mnu').removeClass('open');
  });
});

