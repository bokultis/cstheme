$(function () {
    $(document).scroll(function () {
      var $nav = $(".csnavbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });