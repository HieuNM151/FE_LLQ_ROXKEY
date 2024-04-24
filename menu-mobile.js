$(document).ready(function() {
    $('.checkbox-mobile-menu').change(function() {
        if ($(this).is(':checked')) {
            $('body').addClass('scroll-disabled');
            $('.header').addClass('active');
        } else {
            $('body').removeClass('scroll-disabled');
            $('.header').removeClass('active');
        }
    });
});

$(document).ready(function() {
    var previousCollapse = null;
  
    $(".mobile-menu-item a").click(function() {
      var targetCollapse = $(this).attr("href");
  
      if (previousCollapse && previousCollapse !== targetCollapse) {
        $(previousCollapse).collapse("hide");
        // Thay đổi icon của menu trước đó
        var previousIcon = $(previousCollapse).prev().find("img");
        previousIcon.attr("src", "image/drop-menu-mobile.svg");
        // Đổi màu chữ của menu trước đó
        var previousLink = $(previousCollapse).prev();
        previousLink.css("color", "black");
      }
  
      $(targetCollapse).collapse("toggle");
      // Thay đổi icon của menu hiện tại
      var currentIcon = $(this).find("img");
      var newIcon = currentIcon.attr("src") === "image/drop-menu-mobile.svg" ? "image/Layer_1-2.svg" : "image/drop-menu-mobile.svg";
      currentIcon.attr("src", newIcon);
      // Đổi màu chữ của menu hiện tại
      var currentLink = $(this);
      currentLink.css("color", "red");
  
      // Cập nhật biến previousCollapse
      previousCollapse = targetCollapse;
    });
  });
  
  
  
  