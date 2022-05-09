$(document).ready(function () {
  $(".accordion-item").click(function () {
    if ($(this).hasClass("slided")) {
      $(this).removeClass("slided");
      $(this).find(".accordion-content").slideUp(500);
    } else {
      $(this).find(".accordion-content").slideDown(500);
      $(this).addClass("slided");
    }
  });
});
