
$(document).ready(function () {
    var timer;

    $('.nav-cha').hover(function () {
        var html = '';
        $(this).find('.dropdown-menu li').each(function () {
            html += `<li class="subitem">${$(this).children('a').text()}</li>`;
        });
        $('.menu-bee').html(html);
        timer = setTimeout(function () {
            $('.subheader').slideDown(200);
        }, 200); // Đợi 200ms trước khi hiển thị subheader
    }, function () {
        clearTimeout(timer); // Xóa bộ đếm nếu di chuột ra khỏi .nav-cha
    });

    // Hover ra ngoài .header
    $('.header').mouseleave(function () {
        $('.menu-bee').html('');
        $('.subheader').slideUp(200);
    });

    // Hover vào .subheader
    $('.subheader').hover(function () {
        clearTimeout(timer); // Xóa bộ đếm nếu di chuột vào .subheader
    }, function () {
        $('.menu-bee').html('');
        $('.subheader').slideUp(200);
    });
});



