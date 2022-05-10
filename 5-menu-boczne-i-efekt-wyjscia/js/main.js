$(document).ready(function () {
    $(".hamburger").click(function () {      
      if ($('.main-menu').hasClass('open')) {
        $('.main-menu').removeClass('open');
      } else {
        $('.main-menu').addClass('open');
      }
    });

    $(".main-menu-item a").click(function(e) {
        e.preventDefault();

        $('body').fadeOut(2000, function() {
            window.location.href = $(e.target).attr('href');
        });
    });
  });
