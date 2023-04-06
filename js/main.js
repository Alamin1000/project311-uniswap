(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // sidebar
  $("#headerConnect").click(function () {
    $("#connect-sidebar").addClass("active");
  });
  $("#connect-sidebar-close").click(function () {
    $("#connect-sidebar").removeClass("active");
  });
  $("#settingSidebarOpen").click(function () {
    $("#setting-sidebar").addClass("active");
    $("#connect-sidebar").removeClass("active");
  });
  $("#setting-sidebar-close").click(function () {
    $("#setting-sidebar").removeClass("active");
    $("#connect-sidebar").addClass("active");
  });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});
