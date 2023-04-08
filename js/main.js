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

  //first apply the device theme
  deviceThemeApply();
  // theme__button
  $(".theme__button .option").click(function () {
    // theme-control
    $(".theme__button .option").removeClass("active");
    this.classList.add("active");
    var thisTrig = this.getAttribute("theme-value");
    switch (thisTrig) {
      case "light":
        $("body").removeClass("dark-page");
        break;
      case "dark":
        $("body").addClass("dark-page");
        break;
      case "auto":
        deviceThemeApply();
    }
  });
  function deviceThemeApply() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      $("body").addClass("dark-page");
    } else {
      $("body").removeClass("dark-page");
    }
  }
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});
